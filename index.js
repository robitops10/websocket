const WebSocket = require('ws'); 														// const app =  require('express')()
const v4 = require('uuid').v4;

const wss = new WebSocket.Server( {port: 8181} ); 					// app.listen( 8181, () => console.log('server'))

const clients = [];

wss.on('connection', (ws) => {
	console.log('Client Connected');

	const data = {
		count: clients.length + 1,
	 	id: v4(), 
	 	ws
	};
	clients.push(data); 																			// Store Every user data into a variable

	ws.on('message', (message) => {
		for( item of clients ) {
			const data = {
				id: item.id,
				message
			};

			ws.send( JSON.stringify( data, null, 2 ) ); 					// Send User with ID, & his data.
			console.log( data ); 																	// View what is sending to Client in Terminal
		}
	}); 												
});


