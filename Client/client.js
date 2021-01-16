const $ = (selector) => { 														// Now just Type $(selector) like jQuery
	return document.querySelector(selector);
};



const ws = new WebSocket('ws://localhost:8181');	 		// connect with our WebSocket server
ws.onopen = (e) => {
	console.log('Connected to Server is opened');
};


$('#btn').addEventListener('click', (e)=> {
	e.preventDefault();

	ws.send( $('#name').value ); 												// This Data catched by the server (See on Terminal)
	// console.log( $('#name').value );
});





