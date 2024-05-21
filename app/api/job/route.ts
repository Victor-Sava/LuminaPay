import { fetchTransactions } from "@/lib/chain";
import prisma from "@/lib/prisma";

import BigNumber from "bignumber.js";
import dayjs from "dayjs";

export const dynamic = "force-dynamic";

interface Tx {
  quant: String;
  transaction_id: String;
}
let checkTx = async (tx: Tx) => {
  let price = new BigNumber(tx.quant)
    .dividedBy("1000000000000000000")
    .toString();
  let _tx = await prisma.tx.findFirst({
    where: {
      hash: tx.transaction_id,
    },
  });
  if (_tx?.checked) {
    return;
  }

  let order = await prisma.order.findFirst({
    where: {
      price: price,
      createdAt: {
        gt: dayjs().add(-30, "minute").toDate(),
      },
    },
  });

  if (!order) {
    return;
  }
  if (order.payed) {
    console.log("order checked ", order);
  }

  await prisma.order.update({
    where: { id: order.id },
    data: {
      payed: true,
    },
  });

  await prisma.tx.create({
    data: {
      checked: true,
      orderId: order.id,
      hash: tx.transaction_id,
    },
  });
};

export async function GET(request) {
  let result = await fetchTransactions();
  if (result.total<1){
    return Response.json({ status: false });
  }
  for (let tx of result.token_transfers) {
    await checkTx(tx);
  }
  return Response.json({ status: true });
}
