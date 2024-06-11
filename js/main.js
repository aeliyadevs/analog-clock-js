let playSound = false;
let clockTick = new Audio("../sounds/clock-tick.mp3");
let soundBtn = document.getElementById("sound-btn");
let soundStatus = document.getElementById("sound-status");

var secondHand = document.getElementById("second-hand");
var secondAngle = 0;
function secondHandTurn() {
  if (playSound) {
    clockTick.play();
  }

  if (secondAngle >= 360) {
    hourHandTurn();
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
  if (minuteAngle >= 360) {
    minuteAngle -= 360;
  }
  minuteAngle += 0.1;
  minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
}
// setInterval(minuteHandTurn, 1000);

var hourHand = document.getElementById("hour-hand");
var hourAngle = 0;
function hourHandTurn() {
  if (hourAngle >= 360) {
    hourAngle -= 360;
  }
  hourAngle += 0.5;
  hourHand.style.transform = "rotate(" + hourAngle + "deg)";
}
// setInterval(hourHandTurn, 12000);

function setHands() {
  let now = new Date();

  hourAngle = now.getHours() * 30 + now.getMinutes() * 0.5;
  hourHand.style.transform = "rotate(" + hourAngle + "deg)";
  minuteAngle = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
  secondAngle = now.getSeconds() * 6;
  secondHand.style.transform =
    "rotate(" + secondAngle + "deg) translateY(50px)";
}

function toggleSound() {
  playSound = !playSound;
  if (playSound) {
    soundStatus.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    soundBtn.classList.add("on");
  } else {
    soundStatus.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    soundBtn.classList.remove("on");
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

  setHands();
  // let soundBtn = document.getElementById("sound-btn");
  // soundBtn.addEventListener("click", function () {
  //   soundStatus.innerHTML = "On";
  //   playSound = true;
  // });

  setInterval(secondHandTurn, 1000);
  setInterval(minuteHandTurn, 1000);
  // setInterval(hourHandTurn, 60000);
}
