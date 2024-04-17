// DEPENDENCIES
const app = require("./app.js");
const socketIo = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = socketIo(server); // This is the crucial part for socket.io
const { scheduleCrypto } = require("./helpers/scheduler.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3003;

// scheduleReminders(io);
scheduleCrypto(io);

// LISTEN
server.listen(PORT, () => {
  console.log(`💻 Listening on port ${PORT} 🔖`);
});