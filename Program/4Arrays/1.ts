// 1. Inititalisation and push
const names: string[] = [];
names.push("Dylan");    //no error
console.log(names)
// Push(56) //errr number cant be assignbed to parameter of type string

// 2.Readony->Change cannot be make in an array
const names2 : readonly string[] = [];
names.push("Dylan");    //error

// 3Type inference
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error

// comment line below out to see the successful assignment 
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

let head: number = numbers[0]; // no error
console.log(head);