//Rest parameter = (...rest) allow it put separate elemets into array(It combine elements)

function combineString(...string){
    return string.join(" ");
}
const fullName = combineString("Mr", "Andy","ISHIMWE");// this will combine elements in one
console.log(fullName);