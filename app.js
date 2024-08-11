const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");
const { log } = require("console");

const app = express();
const server = http.createServer(app);

const io = socket(server);
const chess = new Chess();
let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

io.on("connection", function (uniquesocket) {
  console.log("connected");
});

server.listen(process.env.PORT || 3000);
