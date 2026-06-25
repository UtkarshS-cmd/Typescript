// This is valid JavaScript but can lead to bugs
// function add(a, b) {
// return a + b;
// }

// console.log(add("5", 3)); // Returns "53" (string concatenation)

function add(a: number, b: number): number {
return a + b;
}

console.log(add("5", 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'