const express = require("express");
const server = express();
server.use(express.json());
let blankArray = [];

server.get("/", (req, res) => {
  res.status("200").send("Home page");
});

server.get("/login", (req, res) => {
  res.status("200").send("<h1>Login page</h1>");
});

server.post("/signup", (req, res) => {
  blankArray.push(req.body);
  res.send("done");
});

server.get("/product", (req, res) => {
  res.status("200").send("<h1>Product page</h1>");
});

server.get("/json", (req, res) => {
  res.status("200").send(blankArray);
});

server.listen(8010, () => {
  console.log("Server is running");
});
