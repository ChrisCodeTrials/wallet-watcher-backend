const express = require('express')
const user = express.Router()

const { authenticateToken } = require('../middlewares/authenticateToken')

user.get('/', authenticateToken, async (_req, res) => {
  res.json({ message: 'User controller' })
})

module.exports = user
