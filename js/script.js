"use strict";

let spinnerValue = 0;
let output = document.querySelector("#output");
let meter = document.querySelector("#meter");
output.innerHTML = spinnerValue;

function plus() {
  if (spinnerValue >= 10) {
    return false;
  }
  if (spinnerValue >= 4) {
    meter.style.background = "rgb(211, 211, 9)";
    meter.style.filter =
      "drop-shadow(0 0 2.5px rgb(229, 255, 0)) drop-shadow(0 0 10px rgb(229, 255, 0))";
  }
  if (spinnerValue >= 7) {
    meter.style.background = "#f00";
    meter.style.filter =
      "drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)";
  }
  output.innerHTML = ++spinnerValue;
  meter.style.height = spinnerValue * 10 + "%";
}
function minus() {
  if (spinnerValue <= 7) {
    meter.style.background = "rgb(211, 211, 9)";
    meter.style.filter =
      "drop-shadow(0 0 2.5px rgb(229, 255, 0)) drop-shadow(0 0 10px rgb(229, 255, 0))";
  }
  if (spinnerValue <= 4) {
    meter.style.background = "#0f0";
    meter.style.filter =
      "drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0)";
  }
  if (spinnerValue <= 0) {
    return false;
  }

  output.innerHTML = --spinnerValue;
  meter.style.height = spinnerValue * 10 + "%";
}
