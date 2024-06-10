let hours = document.getElementById("hour-numbers");

for (i = 0; i < 12; i++) {
  var angle = i * 30;
  hours.children[i].style.transform = "rotate(" + angle + "deg)";
}

let minutes = document.getElementById("minute-lines");
// var minuteLine = document.createElement("div");
// minuteLine.classList.add("minute-line");
// minutes.appendChild(minuteLine);
for (i = 0; i < 60; i++) {
  var angle = i * 6;
  minutes.children[i].style.transform = "rotate(" + angle + "deg";
}

var secondHand = document.getElementById("second-hand");
var angle = 0;
function startSecond() {
  if (angle === 360) {
    angle = 0;
  }
  angle += 6;
  secondHand.style.transform = "rotate(" + angle + "deg) translateY(50px)";
}
setInterval(startSecond, 1000);

var minuteHand = document.getElementById("minute-hand");
var minuteAngle = 0;
function minuteHandTick() {
  if (minuteAngle === 360) {
    minuteAngle = 0;
  }
  minuteAngle += 0.1;
  minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
}
setInterval(minuteHandTick, 1000);

var hourHand = document.getElementById("hour-hand");
var hourAngle = 0;
function hourHandTick() {
  if (hourAngle === 360) {
    hourAngle = 0;
  }
  hourAngle += 0.1;
  hourHand.style.transform = "rotate(" + hourAngle + "deg)";
}
setInterval(hourHandTick, 12000);
