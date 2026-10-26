const display = document.querySelector(".display");
const audio = document.querySelector("audio");

function input(data) {
  display.value = display.value + data;
}

function equal() {
  audio.play();
  audio.loop = true;
}

function cleardisplay() {
  display.value = "";
}
