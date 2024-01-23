const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("here is the sort history");
  }
  res.end(`<h1>Opps !</h1>
      <p>we cant find the page you are looking for</p>
      <a href="/">BAck Home</a>   `);
  res.write("welcome to home page");
  res.end();
});
server.listen(3000);
