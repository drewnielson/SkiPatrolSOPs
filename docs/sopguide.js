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