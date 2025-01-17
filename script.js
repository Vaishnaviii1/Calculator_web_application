
const display = document.getElementById("display");

function operate(input){
    display.value += input;
}

function cleardis(){
    display.value = " ";
}

function cal(){
    display.value = eval(display.value);
}

function del(){
     display.value = display.value.toString().slice(0,-1);
}