const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Klien terhubung!');

  // Kirim pesan ke klien
  socket.send('Selamat datang di WebSocket Server!');

  // Terima pesan dari klien
  socket.on('message', (message) => {
    console.log(`Pesan diterima: ${message}`);
    socket.send(`Server menerima: ${message}`);
  });

  // Jika klien putus
  socket.on('close', () => {
    console.log('Klien terputus!');
  });
});

console.log('Server WebSocket berjalan di ws://localhost:8080');