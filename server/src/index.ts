import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("chat message", (message: string) => {
    console.log("Received message:", message);
    io.emit("chat message", message);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
