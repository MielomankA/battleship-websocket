import { WebSocketServer } from 'ws';
import { registerPlayer } from '../auth/auth.js';

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

            try {
                const req = JSON.parse(text);
                const { type, data, id } = req;

                if (type === "reg") {
                    const result = registerPlayer(JSON.parse(data));

                    const response = {
                        type: "reg",
                        data: JSON.stringify(result),
                        id
                    };

                    socket.send(JSON.stringify(response));
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
                socket.send(JSON.stringify({
                    type: "error",
                    data: { error: true, errorText: "Invalid JSON" },
                    id: 0
                }));
            }
        });
    });

    process.on('SIGINT', () => {
        console.log("Connection termination...");
        wss.close(() => {
            console.log("WebSocket connection closed");
            process.exit(0);
        });
    });
};
