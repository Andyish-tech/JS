
        //Callback = a function taht is passed as an argument to another functio This help to arrange the task nex to other

//         function greetings(){
//             function hello(){
//     setTimeout(function(){
//         console.log("Hello");
//     },3000);
// }
// function goodbye(){
//     console.log("GoodBye");
// }
//         }
       

        
        sum(displayPage, 1,2);
        function sum(callback, x, y){
            let result = x + y;
            let substractio = x / y;
            callback(substractio); // It will first calculate the sum before going to division
            callback(result);
        }
        function displaConsole(result){
            console.log(result);
        }
        function displayPage(result){
            document.getElementById("myH1").textContent = result;
        }