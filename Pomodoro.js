var totalTime = 1499;

var min;
var sec;

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset"); 

//start button tied to startClock function below.
start.addEventListener("click",startClock , false);  
stop.addEventListener("click", stopTimer, false);


// handles the logic for the clock timer
function countDown() {
	
	min = Math.floor(totalTime / 60);
	sec = totalTime - (min * 60);
	
	if (min < 10) {
    minutes.innerHTML = "0" + min;
	}
	else{ 
	minutes.innerHTML = min;
	}
	
	if (seconds < 10) {
    seconds.innerHTML = "0" + sec;
	}
	else {
	seconds.innerHTML = sec;
	}

	

	
	totalTime = totalTime - 1
	
	
	start.style.display = "block"; 
    stop.style.display = "block"; 
    reset.style.display = "none"; 


}

// tied to the start button. sets off the clock logic to start at intervals of 1 second.
function startClock() {
	countdown_selector = setInterval(countDown, 1000);
	
	
	start.style.display = "block"; 
	stop.style.display = "block"; 
	reset.style.display = "none"; 
	

	}

	

function stopTimer() {
  // stop timer
  clearInterval(countdown_selector);
  
  // show reset button

}
