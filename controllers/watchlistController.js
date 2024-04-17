const express = require("express");
const watchlist = express.Router();
const {deleteWatchlistEntry, getAllWatchlistEntries, getWatchlistEntryById, createWatchlistEntry, updateWatchlistEntry} = require('../queries/watchlist');


// INDEX
watchlist.get('/', async (_req, res) => {
  try {
    const allEntries = await getAllWatchlistEntries();
    res.status(200).json(allEntries);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// SHOW
watchlist.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await getWatchlistEntryById(id);
    if (entry) {
      res.json(entry);
    } else {
      res.status(404).json({ error: 'Watchlist entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// CREATE
watchlist.post('/', async (req, res) => {
  try {
    const newEntry = await createWatchlistEntry(req.body);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// UPDATE
watchlist.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEntry = await updateWatchlistEntry(id, req.body);
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// DELETE
watchlist.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEntry = await deleteWatchlistEntry(id);
    if (deletedEntry.id) {
      res.status(200).json(deletedEntry);
    } else {
      res.status(404).json("Watchlist entry not found");
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = watchlist;
