const http = require("http");
const app = http.createServer();
const PORT = 3000;

app.on("request", (req, res) => {
  const message = "<h1>Hello World, welcome to WeJapa Internships</h1>";
  const notFound = "<h1><h2>Page not found</h2>";
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(message);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end(notFound);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
