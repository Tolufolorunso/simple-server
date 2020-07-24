const http = require("http");
const app = http.createServer();
const PORT = 3000;

app.on("request", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  const message = "<h1>Hello World, welcome to WeJapa Internships</h1>";
  res.end(message);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
