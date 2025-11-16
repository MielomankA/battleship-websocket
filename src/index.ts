import { httpServer } from "./http_server/index.js";
import { socketServer } from "./socket/socket.js";

const HTTP_PORT = 8181;
const WS_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
console.log(`WebSocket server starting on ws://localhost:${WS_PORT}`);

socketServer(WS_PORT);

httpServer.listen(HTTP_PORT);
