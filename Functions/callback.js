
        //Callback = a function taht is passed as an argument to another functio This help to arrange the task nex to other

        function greetings(){
            function hello(){
    setTimeout(function(){
        console.log("Hello");
    },3000);
}
function goodbye(){
    console.log("GoodBye");
}
        }
       
  
        
        sum(displayConsole, 1,2);
        function sum(callback, x, y){
            let result = x + y;
        }
        function displa5