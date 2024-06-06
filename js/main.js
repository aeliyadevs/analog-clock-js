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
