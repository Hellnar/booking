function calendar() {
	document.getElementById('content-calendar').style.display = "flex";
	document.getElementById('content-booked').style.display = "none";
	document.getElementById('content-tasks').style.display = "none";
	console.log("calendar");
}

function meetings() {
	document.getElementById('content-calendar').style.display = "none";
	document.getElementById('content-booked').style.display = "flex";
	document.getElementById('content-tasks').style.display = "none";
	console.log("meetings");
}

function tasks() {
	document.getElementById('content-calendar').style.display = "none";
	document.getElementById('content-booked').style.display = "none";
	document.getElementById('content-tasks').style.display = "flex";
	console.log("tasks");
}