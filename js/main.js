var secondHand = document.getElementById("second-hand");
var secondAngle = 0;

let playSound = false;
let clockTick = new Audio("../sounds/clock-tick.mp3");
let soundStatus = document.getElementById("sound-status");

function secondHandTurn() {
  if (playSound) {
    clockTick.play();
  }

  if (secondAngle === 360) {
    secondAngle = 0;
  }
  secondAngle += 6;
  secondHand.style.transform =
    "rotate(" + secondAngle + "deg) translateY(50px)";
}
// setInterval(secondHandTurn, 1000);

var minuteHand = document.getElementById("minute-hand");
var minuteAngle = 0;
function minuteHandTurn() {
  if (minuteAngle === 360) {
    minuteAngle = 0;
  }
  minuteAngle += 0.1;
  minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
}
// setInterval(minuteHandTurn, 1000);

var hourHand = document.getElementById("hour-hand");
var hourAngle = 0;
function hourHandTurn() {
  if (hourAngle === 360) {
    hourAngle = 0;
  }
  hourAngle += 0.1;
  hourHand.style.transform = "rotate(" + hourAngle + "deg)";
}
// setInterval(hourHandTurn, 12000);

function toggleSound() {
  playSound = !playSound;
  if (playSound) {
    soundStatus.innerHTML = '<i class="fa-solid fa-volume-high unmute"></i>';
  } else {
    soundStatus.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
}
function onDocumentLoad() {
  let hours = document.getElementById("hour-numbers");

  for (i = 0; i < 12; i++) {
    var angle = i * 30;
    hours.children[i].style.transform = "rotate(" + angle + "deg)";
  }

  let minutes = document.getElementById("minute-lines");
  for (i = 0; i < 60; i++) {
    var angle = i * 6;
    minutes.children[i].style.transform = "rotate(" + angle + "deg";
  }

  // let soundBtn = document.getElementById("sound-btn");
  // soundBtn.addEventListener("click", function () {
  //   soundStatus.innerHTML = "On";
  //   playSound = true;
  // });

  setInterval(secondHandTurn, 1000);
  setInterval(minuteHandTurn, 1000);
  setInterval(hourHandTurn, 12000);
}
