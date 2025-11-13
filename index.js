import { httpServer } from "./src/http_server/index.js";
import { WebSocketServer } from 'ws';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (socket) => {
    console.log('WS client connected');
    socket.send(JSON.stringify({ type: 'message', content: 'Hello from Node.js!' }));

    socket.on('message', (msg) => {
        console.log('WS message:', msg.toString());
    });
});

httpServer.listen(HTTP_PORT);
