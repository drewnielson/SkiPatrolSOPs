// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

// Add a row to track more stranded staff
var strandedrows = 1;
function addStranded() {
	strandedrows++;
	$("#tbStranded").append("<tr class='w3-border-bottom w3-border-red'><td><input type='number' style='width:50px'></td><td><input type='number' style='width:50px'></td><td><input type='number' style='width:60px'></td><td><input type='checkbox' id='patrol" + strandedrows + "'><label for='patrol" + strandedrows + "'> SP</label><br><input type='checkbox' id='ms" + strandedrows + "'><label for='ms" + strandedrows + "'> MS</label></td></tr>");
}

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