var getprogressbar = document.getElementById('progress-bar');
// console.log(getprogressbar);

window.onscroll = function(){
	scrollpoint();
}

function scrollpoint(){
	// console.log('I am working');

	// scrolltop
	// project height
	// current height

	// project height - current height

	// scrolltop * 100 / (project height - current height)

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);
	var getscrollHeight = document.documentElement.scrollHeight;
	// console.log(getscrollHeight);
	var getclientHeight = document.documentElement.clientHeight;
	// console.log(getclientHeight);

	var calcheight = getscrollHeight - getclientHeight;
	// console.log(calcheight);

	var getfinal = Math.round(( getscrolltop * 100 ) / calcheight);
	// console.log(getfinal);

	// var getfinal = Math.round((getscrolltop / calcheight) * 100);
	// console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;


}

function printme(){
	window.print();
}