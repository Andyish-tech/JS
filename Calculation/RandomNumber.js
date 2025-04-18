const mybtn = document.getElementById("mybtn");
        const mylabel= document.getElementById("mylabel");
        const min = 1;
        const max = 6;
        let random;

        mybtn.onclick = function(){
            random = Math.floor(Math.random() * max) + min;
            mylabel.textcontent = random;
        }