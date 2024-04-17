const db = require('../db/dbConfig.js');

const getAllOwnedCoins = async () => {
  try {
    const allCoins = await db.any('SELECT * FROM owned_coins');
    return allCoins;
  } catch (error) {
    return error;
  }
};

const getOwnedCoinById = async (id) => {
  try {
    const coin = await db.one('SELECT * FROM owned_coins WHERE id=$1', id);
    return coin;
  } catch (error) {
    return error;
  }
};

const deleteOwnedCoin = async (id) => {
  try {
    const deletedCoin = await db.one(
      'DELETE FROM owned_coins WHERE id=$1 RETURNING *',
      id
    );
    return deletedCoin;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllOwnedCoins,
  getOwnedCoinById,
  deleteOwnedCoin
};
