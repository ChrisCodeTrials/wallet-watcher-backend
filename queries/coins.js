const db = require('../db/dbConfig.js');

const getAllCoins = async () => {
  try {
    const allCoins = await db.any('SELECT * FROM coins');
    return allCoins;
  } catch (error) {
    return error;
  }
}

const getCoinByAddress = async (coin_address) => {
    try {
      const coin = await db.one('SELECT * FROM coins WHERE coin_address=$1', coin_address);
      return coin;
    } catch (error) {
      return error;
    }
}

module.exports = {
  getAllCoins,
  getCoinByAddress
};
