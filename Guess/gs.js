//Number guessing game

const minNum=1;
const maxNum=100;
const answer = Math.random() * (maxNum - minNum + 1);

let attempt = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempt++
        if(guess < answer){
            window.alert("Too Low! Try again")
        }
        else if(guess > answer){
            window.alert("Too High! Try again")
        }
        else{
            window.alert(`Correct! the answer was ${answer}. It took you ${attempt}attempts`);
            running = false;
        }
    }
}