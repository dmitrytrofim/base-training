import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Клиент подключился');

  ws.on('message', (data) => {
    const message = data.toString();
    console.log('Получено:', message);
    ws.send(`Сервер говорит: ${message}`);
  });

  ws.on('close', () => console.log('Клиент отключился'));
});

console.log('Сервер запущен на ws://localhost:8080');