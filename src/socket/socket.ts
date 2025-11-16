import { WebSocketServer } from 'ws';

export const socketServer = (WS_PORT: number) => {
    const wss = new WebSocketServer({ port: WS_PORT });

    wss.on('connection', (socket) => {
        console.log('WS client connected');

        socket.on('close', (code, reason) => {
            const reasonText = reason.toString() || 'No reason';
            const codeText = code.toString() || 'No code';

            console.log(`WS client disconnected - reason: ${reasonText} | code: ${codeText}`);
        });

        socket.on('message', (message) => {
            const text = message.toString();
            console.log('Received message:', text);
        });
    });
};
