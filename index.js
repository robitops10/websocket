const WebSocket = require('ws'); 														// const app =  require('express')()
const v4 = require('uuid').v4;

const wss = new WebSocket.Server( {port: 8181} ); 					// app.listen( 8181, () => console.log('server'))

const clients = [];

wss.on('connection', (ws) => { 															// (1) : On Every Page Refresh: Create new Connection.
	console.log('Client Connected');

	const data = {
		count: clients.length + 1,
	 	id: v4(), 
	 	ws
	};
	clients.push(data); 																			

	ws.on('message', (message) => { 													// (3) : Fire when user Reply, we capture with on('message', (data) => data)
		if( ws.readyState === 1 ) {
			clients.map( (item) => {
				const json = { id: item.id, message };
				ws.send( JSON.stringify(json) ); 										// (4) : Server Send, Client capture with on('message', (e) => {e.data})
				console.log( JSON.stringify(json, null, 2) );
			});
		}
	}); // End of message Event


	ws.on('close', () => {																		// (2) : On Every Page Refresh: Close old Connection 
		clients.map( (item, index) => {
			if( item.id === clients[index].id ) {
				console.log( `client [ ${item.id} ] disconnected.` );
				clients.splice( index, 1);

				console.clear(); 																		// when connection close clear the terminal too
			}
		});
	});

}); // End of Connection
