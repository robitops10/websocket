
const WebSocketServer = require('ws').Server; 							// const app =  require('express')()
const wss = new WebSocketServer( {port: 8181} ); 						// app.listen( 8181, () => console.log('server'))

wss.on('connection', (ws) => {
	console.log('Client Connected');

	ws.on('message', (message) => {
		console.log( `Got Data: ${message}`);
	}); 												
});
