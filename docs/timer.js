// Timer 
 function showTime() {
	var y = new Date().getFullYear();
	var m = new Date().getMonth() + 1;
	var d = new Date().getDate();
	newCountUpTime = document.getElementById("stoptime").value;
	countUpDate = new Date(m + "/" + d + "/" + y + " " + newCountUpTime);
}

// Set the date/time we're counting from starting with now
var countUpDate = new Date();;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = now - countUpDate;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = hours + "h"
  + minutes + "m" + seconds + "s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
	alert("You must enter a time that occurs in the past");
  }
}, 1000);