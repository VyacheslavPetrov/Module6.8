function getProgress() {
	return document.getElementById("progressbar").getAttribute("aria-valuenow");
	return document.getElementById("progressbar").getAttribute("style","width");
	return document.getElementById("progressbar").innerHTML;
	}

function setProgress(value) {
	document.getElementById("progressbar").setAttribute("aria-valuenow",value);
	document.getElementById("progressbar").setAttribute("style","width: " + value + "%");	
	document.getElementById("progressbar").innerHTML = (value + "%"); 
}

function byOne() {
var i = getProgress();
		i++;
		setProgress(i);
}

function byTwo() {
	var d = getProgress();
	setProgress(d - (-3));	
}

function byThree() {
	var t = getProgress();
	setProgress(t - (-7));	
}