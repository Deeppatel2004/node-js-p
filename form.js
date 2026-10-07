const http = require("http");

http.createServer((req, resp) => {
  resp.writeHead(200, { "Content-Type": "text/html" });
  console.log(req.url);

  if (req.url === "/") {
  resp.write(`
    <form action="/submit" method="POST">
      <input type="text" id="name" placeholder=" Enter Name" name="name">
      <br>
      <input type="email" id="email" placeholder=" Enter Email" name="email">
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
  } else if (req.url === "/submit"){
    resp.write(`
      <h1>Form Submitted</h1>
    `);
  }
  resp.end();
}).listen(3200)