import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import _ from "lodash";
import {gen_nonid} from "@/lib/utils";


export async function GET(request) {
  let list = await prisma.manual.findMany({ orderBy: { id: "desc" } });
  return Response.json({ status: true, list });
}

export async function POST(request: NextRequest) {
  let json = await request.json();

  let data = {
    quota: parseInt(json.quota),
    hash: gen_nonid(),
    log: json.log,
  };

  if (json.id) {
    await prisma.manual.update({
      where: { id: json.id },
      data,
    });
  } else {
    await prisma.manual.create({ data });
  }

  return Response.json({ status: true });
}
