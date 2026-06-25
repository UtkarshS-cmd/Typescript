const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

console.log(car)

// type inference
const car1 = {
  type: "Toyota",
};
car1.type = "Ford"; // no error
// car1.type = 2; // Error: Type 'number' is not assignable to type 'string'.\
console.log(car1)

//optional properties
const car3: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   mileage?: number -> ur para pe optional property
    type: "Toyota",
};
car3.mileage = 2000;
console.log(car3)

// index Signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(newAgeMap)

