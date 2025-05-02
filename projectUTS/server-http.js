const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Waktu server: ${new Date().toLocaleTimeString()}`);
});

server.listen(3000, () => {
  console.log('Server HTTP berjalan di http://localhost:3000');
});