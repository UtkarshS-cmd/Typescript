// undefined means a variable has been declared but not assigned a value
// null is an explicit assignment that represents no value or no object

//eg1
let y : undefined = undefined
let z: null = null

console.log(y);
console.log(z);

//eg2
// Optional parameter (implicitly `string | undefined`)
function greet(name ?: string){
    return `Hello, ${name || 'stranger'}`;
}

//optimal property in interference
interface User {
    name: string;
    age ?: number; //same as `number | undefined`
}

//Nullish coalescing and opitonal Chaining

// Nullish coalescing (??) - only uses default if value is null or undefined
const input: string | null = null;
const value = input ?? 'default';
console.log(value);

// Optional chaining (?.) - safely access nested properties
const user = { address: { street: 'Main St' } };
const street = user?.address?.street;
console.log(street);
