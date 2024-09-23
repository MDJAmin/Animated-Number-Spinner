"use strict"

let spinnerValue = 0; 
let output = document.querySelector("#output")
let meter = document.querySelector("#meter")
output.innerHTML=spinnerValue;

function plus(){
if(spinnerValue >= 10){
    return false
}
if(spinnerValue >= 7 ){
    meter.style.background = "#f00"
    meter.style.filter = "drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)"
}
output.innerHTML = ++spinnerValue;
meter.style.height = spinnerValue*10+"%"
}
function minus(){
    if(spinnerValue<= 0 ){
        return false;
    }
    if(spinnerValue <= 7 ){
        meter.style.background = "#0f0"
        meter.style.filter = "drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0)"
    }
    output.innerHTML= --x;
    meter.style.height = x*10+'%' ;
}