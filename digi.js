// Random Backgrounds
let gallery = ['photos/grey-background.jpg', 'photos/background.jpg', 'photos/background2.jpg'];
let random = Math.floor(Math.random()*3);
function background(){
	document.body.style.backgroundImage='url(' + gallery[random] +')';
};
background();
//clock
function clock(){
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	if(h<=9){h = '0'+h};
	if(m<=9){m = '0'+m};
	if(s<=9){s = '0'+s};
	if(h<11){document.getElementById('custom').innerHTML = "Good Morning!"}
	else if(h<13){document.getElementById('custom').innerHTML = "Happy Noon!"}
	else if(h<16){document.getElementById('custom').innerHTML = "Good Afternoon!"}
	else if(h<22){document.getElementById('custom').innerHTML = "Good Evening!"}
	else{document.getElementById('custom').innerHTML = "Wow you are up late! Good Night!"};
	let time = h+':'+m+':'+s;
	document.getElementById('clock').innerHTML = time;
};
clock();
setInterval(clock, 1000);