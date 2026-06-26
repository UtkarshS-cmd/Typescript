// as->overriding the type of variable, such as incorrect types
let x : unknown = ' hello';
console.log((x as string).length);

// will not work on the below way
// let x: unknown = 4;
// console.log((x as string).length); // prints undefined since numbers don't have a length

// <> - > work same as 'as'
let y: unknown = 'hello';
console.log((<string>y).length);

// Force casting
let z = 'hello';
console.log(((z as unknown) as number).length); // x is not actually a number so this will return undefined

// let x: unknown = "Hello"
// console.log((x as string).length)

// let y: unknown = "gseg"
// console.log((<string>y))

// let z = "65"
// console.log(((z as unknown) as number))
