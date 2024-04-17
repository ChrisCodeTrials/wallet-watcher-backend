const express = require('express');
const ownedCoinsController = express.Router();
const { getAllOwnedCoins, getOwnedCoinById, deleteOwnedCoin } = require('../queries/ownedCoins');

ownedCoinsController.get('/', async (_req, res) => {
  try {
    const allOwnedCoins = await getAllOwnedCoins();
    res.status(200).json(allOwnedCoins);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

ownedCoinsController.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const ownedCoin = await getOwnedCoinById(id);
    if (ownedCoin) {
      res.json(ownedCoin);
    } else {
      res.status(404).json({ error: 'Owned coin not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

ownedCoinsController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCoin = await deleteOwnedCoin(id);
    if (deletedCoin.id) {
      res.status(200).json(deletedCoin);
    } else {
      res.status(404).json("Owned coin not found");
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = ownedCoinsController;
