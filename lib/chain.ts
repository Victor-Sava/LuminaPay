export async function fetchTransactions() {
  let trx_wallet = process.env.TRX_WALLET;
  let trx_scan_endpoint = process.env.TRXSCAN_ENDPOINT;
  let trx_scan_key = process.env.TRXSCAN_KEY;
  let trx_scan_usdt_contract_address = process.env.TRX_USDT_TOKEN;

  let url = `${trx_scan_endpoint}?limit=20&start=0&contract_address=${trx_scan_usdt_contract_address}&toAddress=${trx_wallet}`;
  let { result } = await (await fetch(url, { cache: "no-cache" })).json();
  return result;
}
