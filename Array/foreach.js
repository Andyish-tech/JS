// forEach() = method used to iterate over the elements of an array and apply a specified functin (calback) to each element  array.forEach(callback)


let fruit = ["apple", "orange", "banana", "coconut"];

fruit.forEach(capitalize);
fruit.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}