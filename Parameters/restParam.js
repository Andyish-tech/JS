//Rest parameter = (...rest) allow it put separate elemets into array(It combine elements)

function combineString(...string){
    return string.join(" ");
}
const fullName = combineString("Mr", "Andy","ISHIMWE");// this will combine elements in one
console.log(fullName);

// rest parameter to caculate the to tal of array or set of numbers

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,3,4,5);
 console.log(`My Total ${total} Rwf`);

//  you can also use rest parameters to combine strings

function combineStrings(...strings){
    return strings.join("+--+");
}

const StringName = combineStrings('Mr', 'Andy', 'Ishimwe');

 console.log(fullName);