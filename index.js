const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("./data.json", "utf-8");

const server = http.createServer((req, res) => {
  res.writeHead("200", { "Content-type": "application/json" });
  res.end(data);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listen to port 8000");
});
