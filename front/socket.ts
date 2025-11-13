const clientSocket = new WebSocket(`ws://localhost:8181`);

clientSocket.addEventListener('open', event => {
    console.log('WebSocket connection established!');
    clientSocket.send('Hello Server!');
});

clientSocket.addEventListener('message', event => {
    console.log('Message from server: ', event.data);
});

clientSocket.addEventListener('close', event => {
    console.log('WebSocket connection closed:', event.code, event.reason);
});

clientSocket.addEventListener('error', error => {
    console.error('WebSocket error:', error);
});
