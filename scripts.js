function calendar() {
	document.getElementById('content-calendar').style.display = "flex";
	document.getElementById('content-book-meeting').style.display = "none";
	document.getElementById('content-booked').style.display = "none";
	document.getElementById('content-tasks').style.display = "none";
}

function meetings() {
	document.getElementById('content-calendar').style.display = "none";
	document.getElementById('content-book-meeting').style.display = "none";
	document.getElementById('content-booked').style.display = "flex";
	document.getElementById('content-tasks').style.display = "none";
}

function tasks() {
	document.getElementById('content-calendar').style.display = "none";
	document.getElementById('content-book-meeting').style.display = "none";
	document.getElementById('content-booked').style.display = "none";
	document.getElementById('content-tasks').style.display = "flex";
}

function bookMeeting() {
	document.getElementById('content-calendar').style.display = "none";
	document.getElementById('content-book-meeting').style.display = "flex";
	document.getElementById('content-booked').style.display = "none";
	document.getElementById('content-tasks').style.display = "none";
}


document.querySelector('.tasks-completed').style.display = "none";
document.getElementById('show-completed').innerText = "Show completed tasks";

function showcompleted() {
	if (document.querySelector('.tasks-completed').style.display === "none") {
		document.querySelector('.tasks-completed').style.display = "flex";
		document.getElementById('show-completed').innerText = "Hide completed tasks";
		console.log("must show")
	} else {
		document.querySelector('.tasks-completed').style.display = "none";
		document.getElementById('show-completed').innerText = "Show completed tasks";
		console.log("must hide")
	}

}