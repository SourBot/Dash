function displayTime() {
	var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    
	setTimeout(displayTime, 1000);
	
	if (hours < 10) {
    hours = "0" + hours;
	}
	
	if (minutes < 10) {
    minutes = "0" + minutes;
	}
	
	
	if (seconds < 10) {
    seconds = "0" + seconds;
}
clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }

  // This runs the displayTime function the first time
  displayTime();