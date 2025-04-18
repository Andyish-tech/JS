// Temperature conversion Programm

const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";// alt + 0176 ° sign

    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"; // alt + 0176 ° sign
    }
    // else{
    //     result.textContent = "Select a unit";
    // }
}