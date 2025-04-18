const Myage= document.getElementById("age");
const sub= document.getElementById("sub");
const result= document.getElementById("result");
let age;

sub.onclick= function() {
    age= Myage.value;
    age=Number(age);

    if (age<18){
        result.textContent="Hey Kido this is not your Site!";
    }
    else if(age>=18){
        result.textContent="Your old enough to be here!";
    }
}
