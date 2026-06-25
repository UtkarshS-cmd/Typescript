// tuple-> typed arrays -> predeifned length and tyoes for each idx
// ->must specify type of element in arrray to define tuple

// 1. define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);

// 2. Readonly Tuple
// define our tuple
let ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong'); //no push as tuple is readonly
console.log(ourTuple2);

// Example
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off'); error