const http = require("http");
const fs = require("fs");

http.createServer((req, resp) => {
  if (req.url === "/") {
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.end("Internal Server Error");
      return;
    } 
  resp.writeHead(200, { "Content-Type": "text/html" });
  resp.end(data);
  });

}   
else if (req.url === "/submit") {
  resp.writeHead(200, { "Content-Type": "text/html" });
  resp.end(`
    <h1 id="submit-message">Form Submitted</h1>
  `);
}        else {
          resp.writeHead(404, { "Content-Type": "text/plain" });
          resp.end("Page not found");
        }
}).listen(8000)