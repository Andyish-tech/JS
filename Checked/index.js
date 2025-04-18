const subscribe= document.getElementById('subscribe');
const visa= document.getElementById('visa');
const MTN= document.getElementById('MTN');
const masterCard= document.getElementById('masterCard');
const submit= document.getElementById('submit');
const result= document.getElementById('result');

submit.onclick = function(){
    if(subscribe.checked){
        result1.textContent = "Your have Subscribed";
    }
    else{
        result1.textContent = "You are not subscribed";
    }
    if(masterCard.checked){
        result.textContent = "You will pay with Master Card";
    }else if(visa.checked){
        result.textContent = "You will pay with Visa";
    }else if(MTN.checked){
        result.textContent = "You will pay with MTN";
    }else{
        result.textContent = "Choose Option to pay with";
    }
}
