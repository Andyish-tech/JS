// array = a variable like structure that can hold more than one value

let fruits = ['apple','orange','banana'];

// to display fruit you console.log(fruits[index of element]))

//to add element to the end of array

fruits.push('coconut');
  
 // to remove the last element

 fruits.pop();

 //to add element at the bigining of array

 fruits.unshift("mango")

 //console.log(fruits);

  //to remove the element at the bigining of the array
  
  fruits.shift();

  //to get the number of element in array

  let numOfFruits = fruits.length;
//   console.log(numOfFruits);

  //to display the index of element

let index = fruits.indexOf('apple');
// console.log(index);

// to display element in loop i+=2 it will be incrementing by 2 or any number you cab provide
for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]); 
}
// this display all element of array you can revese to make it start from last element by

for(let i = fruits.length-1; i >= 0; i--){
    console.log(fruits[i]); 
} 

// you can use also unihance for Loop

for(let fruit of fruits){
    console.log(fruit);
}

// You can sort in alpabetical order

fruits.sort();

// to reverse

// fruits.sort().reverse();

