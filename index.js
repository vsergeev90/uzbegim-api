const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("./data.json", "utf-8");

const server = http.createServer((req, res) => {
  res.writeHead("200", {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
  });
  res.end(data);
});

server.listen(process.env.PORT || 8000, () => {
  console.log(`Listen to port ${process.env.PORT}`);
});
