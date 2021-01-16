
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
	
	ws.on('message', (message) => {
		data.message = message;

		console.log( message ); 										// When get some message 
		ws.send('ok'); 															// Reply this
	}); 												


	clients.push(data); 													// Store data
	console.log( clients ); 											// See on Server Terminal (Console)


});


