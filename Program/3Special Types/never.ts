// Common use cases for never:

// Functions that never return (always throw an error or enter an infinite loop)
// Type guards that never pass type checking
// Exhaustiveness checking in discriminated unions

// 1.fn that never returns
function throwError(message : string) : never {
    throw new Error(message);
}

// 2.Exhaustivness checking with unions
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; sideLength: number };
type Triangle = { kind: 'triangle'; base: number; height: number };
type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return (shape.base * shape.height) / 2;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// 3 basic never type - demonstrating that never cannot hold any value
// The following line is intentionally commented to show never's nature
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// When to use never:

// For functions that will never return a value
// In type guards that should never match
// For exhaustive type checking in switch statements
// In generic types to indicate certain cases are impossible