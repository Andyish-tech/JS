// This is for accepting user inputs Name
let Myname;
document.getElementById("submit").onclick = function() {
    Myname = document.getElementById("Myname").value;
    document.getElementById("welcome").innerHTML =`Hello ${Myname}`;
};


// Calculations of Circumfrense and Type conversion

const PI= 3.14159;
let radius;
let Circumference;
document.getElementById("calculate").onclick = function() {
    radius = document.getElementById("Radius").value;
    radius= number(radius);
    Circumferense= 2 * PI * radius;
    document.getElementById("res").innerHTML = `circumference: ${Circumference}`;
};
