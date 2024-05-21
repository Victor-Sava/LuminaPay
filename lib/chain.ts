export async function fetchTransactions() {
  const trx_wallet = process.env.TRX_WALLET;
  const trx_scan_endpoint = process.env.TRXSCAN_ENDPOINT;
  const trx_scan_key = process.env.TRXSCAN_KEY;
  const trx_scan_usdt_contract_address = process.env.TRX_USDT_TOKEN;

  if (!trx_wallet || !trx_scan_endpoint || !trx_scan_key || !trx_scan_usdt_contract_address) {
    throw new Error("Missing required environment variables.");
  }


  let url = `${trx_scan_endpoint}?limit=20&start=0&contract_address=${trx_scan_usdt_contract_address}&toAddress=${trx_wallet}`;
  console.log(url)
  console.log(url);

  const headers = new Headers();
  headers.append("TRON-PRO-API-KEY", trx_scan_key);

  const requestdata = await fetch(url, { cache: "no-cache", headers: headers });

  if (!requestdata.ok) {
    throw new Error(`Error fetching data: ${requestdata.statusText}`);
  }

  const result = await requestdata.json();
  console.log(result);

  return result;
}
