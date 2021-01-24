const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead("200", {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
    });
    res.end(data);
  } else {
    res.writeHead("404", {
      "Content-type": "text/html",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
    });
    res.end("<h1>Wrong page</h1>");
  }
});

server.listen(process.env.PORT || 8000, () => {
  console.log(`Listen to port ${process.env.PORT}`);
});
