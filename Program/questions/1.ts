// // 1
// let str: string = "Utkarsh";
// let num: number = 654;
// let bool: boolean = true;

// console.log(str)
// console.log(num)
// console.log(bool)

// // 2
// let language = "TypeScript"; // inferred: string
// let version = 5;            // inferred: number
// let isNew = true;           // inferred: boolean

// // 3
// let variable : any = "string"
// variable = 69
// variable = true
// variable = undefined
// variable = null 

// // 4
// // any completely disables type checking. You can call any method, access any property, pass it anywhere — TypeScript just looks away.
// // unknown is the safe counterpart. It says "I don't know the type yet, but I won't let you use it unsafely.
// // " Before you can do anything with an unknown value, you must narrow it — prove to TypeScript what type it actually is.

// let val: unknown = "world";
// if (typeof val === "string") {
//   console.log(val.toUpperCase()); // safe, whereas in any it's not
// }

// //6 
// function fail(msg: string): never {
//   throw new Error(msg);
// }
// // never type represents values that will never occur

// // 7
// const array_num: number[] = [1,2,4];
// const array_string: string[] = ["Hello","Hi","Hey there!"];
// // or
// let numbers: Array<number> = [1,2]
// let names: Array<string> = ["Ana", "Bob"];

// // 8
// let prices: number[] = [9, 14, 3]

// //9
// let person: [string, number] = ["Utkarsh", 20];

// //10
// let coords: [number, number] = [28.6, 77.2];
// console.log(coords[1]);

// // 11
// enum direction {
//     Nort,
//     South,
//     East,
//     West
// }

// // 12
// enum Status{
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Pending = "PENDING"
// }

// //1
// type Point = {
//   x: number;
//   y: number;
// };

// //14
// // type StringOrNumber = {
// //     alias : string | number
// // }

//     //practical->use case
// // type StringOrNumber = string | number;

// // function display(val: StringOrNumber) {
// //   console.log(val);
// // }

// // 15
// interface User {
//   name : string,
//   age : number,
//   email ?: string
// }

// // 16
// interface Admin extends User {
//   role: string;
// }
// // extending an interface allows you to copy the properties and methods of an existing interface into a new one using the extends keyword.

// // 17
// function add(a: number, b: number): number {
//   return a + b;
// }

// // 18
// function greet(name: string, greeting: string = "Hello"): string {
//   return `${greeting}, ${name}!`;
// }

// // 19
// function sum(...nums: number[]): number {
//   return nums.reduce((acc, n) => acc + n, 0);
// }

// // 20
// function sum(...nums: number[]): number {
//   return nums.reduce((acc, n) => acc + n, 0);
// }

// //21
// function sum(...nums: number[]): number {
//   return nums.reduce((acc, n) => acc + n, 0);
// }

// // 22
// function logMessage(msg: string): void {
//   console.log(msg);
// }