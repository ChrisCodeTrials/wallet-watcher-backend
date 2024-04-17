const schedule = require("node-schedule");


const cryptoUpdaters = async (io) => {
  const options = {
    method: "GET",
    headers: {
      "x-chain": "ethereum",
      "X-API-KEY": "79434a86bf46406cb9d7788bb57e0a22",
    },
  };

  const res = await fetch(
    'https://public-api.birdeye.so/defi/tokenlist?sort_by=v24hUSD&sort_type=desc&offset=100&limit=10',
    options
  );
  const data = await res.json();
  //query to database(data)
  console.log(`last update at ${new Date().toLocaleTimeString()}`, data);
  //   const crypto = await findCrypto();
  io.emit("cryptoUpdates", data);
};

const scheduleCrypto = (io) => {
  console.log("ran scheduleCrypto");
  schedule.scheduleJob("*/1 * * * *", () => cryptoUpdaters(io));
};
module.exports = { scheduleCrypto };