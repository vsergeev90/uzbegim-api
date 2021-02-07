const server = require("./app");

server.listen(process.env.PORT || 8000, () => {
  console.log(`Listening to port: ${process.env.PORT}`);
});
