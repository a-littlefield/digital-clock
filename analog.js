function clock(){
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	document.getElementsByClassName('seconds')[0].style.transform="rotate("+(s*6)+"deg)";
	document.getElementsByClassName('minutes')[0].style.transform="rotate("+(m*6)+"deg)";
	document.getElementsByClassName('hours')[0].style.transform="rotate("+(h*30)+(m/2)+"deg)";
	setTimeout(clock, 1000);
}
clock();