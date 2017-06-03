function clock () {	
	let d = new Date ();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	let colors = ['lightgreen', 'lightblue', 'purple', 'magenta', 'purple'];
	let active = 0;
	if(h <= 9){h = '0'+h};
	if(m <= 9){m = '0'+m};
	if(s <= 9){s = '0'+s};
	let time = '#'+h+''+m+''+s;
	document.getElementById('clock').innerHTML = time;
	
	document.body.style.background = time;
	
	
};
clock();
setInterval(clock, 1000);