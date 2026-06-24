//string
let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

// Output the values
console.log(greeting);
console.log(userCount);
console.log(isLoading);
console.log(scores);

//function
// Function with explicit parameter and return types
function greet(name: string): string {
return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
// greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'