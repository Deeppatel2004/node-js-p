const http = require('http');

const userData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com'
  }
]

http.createServer((req, resp) => {
  resp.setHeader("content-type", "application/json");
  resp.write(JSON.stringify(userData));
  resp.end();
}).listen(8001)