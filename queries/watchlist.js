const db = require('../db/dbConfig.js');

const getAllWatchlistEntries = async () => {
  try {
    const allEntries = await db.any('SELECT * FROM watchlist');
    return allEntries;
  } catch (error) {
    return error;
  }
};

const getWatchlistEntryById = async (id) => {
  try {
    const entry = await db.one('SELECT * FROM watchlist WHERE id=$1', id);
    return entry;
  } catch (error) {
    return error;
  }
};

const createWatchlistEntry = async (watchlistEntry) => {
  const { user_id, coin_id, notes } = watchlistEntry;
  try {
    const newEntry = await db.one(
      'INSERT INTO watchlist (user_id, coin_id, notes) VALUES($1, $2, $3) RETURNING *',
      [user_id, coin_id, notes]
    );
    return newEntry;
  } catch (error) {
    return error;
  }
};

const updateWatchlistEntry = async (id, watchlistEntry) => {
  const { user_id, coin_id, notes } = watchlistEntry;
  try {
    const updatedEntry = await db.one(
      'UPDATE watchlist SET user_id=$1, coin_id=$2, notes=$3 WHERE id=$4 RETURNING *',
      [user_id, coin_id, notes, id]
    );
    return updatedEntry;
  } catch (error) {
    return error;
  }
};

const deleteWatchlistEntry = async (id) => {
  try {
    const deletedEntry = await db.one(
      'DELETE FROM watchlist WHERE id=$1 RETURNING *',
      id
    );
    return deletedEntry;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllWatchlistEntries,
  getWatchlistEntryById,
  createWatchlistEntry,
  updateWatchlistEntry,
  deleteWatchlistEntry
};
