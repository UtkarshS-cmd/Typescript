// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');
console.log(data);

// 2. Variables declared without initialization
let something;  // Type is 'any'
something = 'hello';
something = 42;  // No error
console.log(something);

// Avoid any When Possible
// Using any disables TypeScript's type checking.

// Instead, consider these alternatives:

// Use type annotations
// Create interfaces for complex objects
// Use type guards for runtime type checking
// Enable noImplicitAny in your tsconfig.json

// When to use any:

// When migrating JavaScript code to TypeScript
// When working with dynamic content where the type is unknown
// When you need to opt out of type checking for a specific case