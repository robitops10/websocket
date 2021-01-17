const $ = (selector) => { 														// Now just Type $(selector) like jQuery
	return document.querySelector(selector);
};



const ws = new WebSocket('ws://localhost:8181');	 		// connect with our WebSocket server
const totalMessage = [];


ws.addEventListener('open', (e) => {
	console.log('Connected to Server is opened');
	// console.log( e );
});

$('#btn').addEventListener('click', (e)=> {
	e.preventDefault();
	ws.send( $('#name').value ); 												// This Data catched by the server (See on Terminal)
	// console.log( e );
});


ws.addEventListener('message', (e)=> {
	const obj = JSON.parse( e.data );
	totalMessage.push( obj );

	let lists = '<ul>';
	const items = totalMessage.map( item => `<li> ${item.id}: ${item.message} </li>`);
	lists += items.join(' ');
	lists += '</ul>';

	$('#output').innerHTML = lists;
	console.log( lists )

});


ws.addEventListener('close', () => {
	console.clear();
});



