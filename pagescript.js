alert("Hello, World!")

// HTML Elements
var changeamt = 0;
var changeamtdisplay = document.getElementById("changeamtdisplay");

var add100 = document.getElementById("add100");
var add10 = document.getElementById("add10");
var add1 = document.getElementById("add1");

var sub100 = document.getElementById("sub100");
var sub10 = document.getElementById("sub10");
var sub1 = document.getElementById("sub1");

var teamScores = ["SKIP", 0, 0, 0, 0, 0]

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");

// Functions
function updateDisplays() {
  t1.innerHTML = teamScores[1];
  t2.innerHTML = teamScores[2];
  t3.innerHTML = teamScores[3];
  t4.innerHTML = teamScores[4];
  t5.innerHTML = teamScores[5];
  changeamtdisplay.innerHTML = `${changeamt}`
}

function updateTeamScore(teamnum, amount) {
  teamScores[teamnum] =+ amount;
  updateDisplays();
}

function add(amount) {
  changeamt += amount;
  updateDisplays();
}

function sub(amount) {
  changeamt -= amount;
  updateDisplays();
}

// Event Listeners
add100.addEventListener("click", add(100));
add10.addEventListener("click", add(10));
add1.addEventListener("click", add(1));

sub100.addEventListener("click", sub(100));
sub10.addEventListener("click", sub(10));
sub1.addEventListener("click", sub(1));
