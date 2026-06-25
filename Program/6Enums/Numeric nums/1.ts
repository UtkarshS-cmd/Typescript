// enum->special "class" -> represent constants (unchangeable variables)
// string and numeric flavors pe aata hai

// Numeric Enums - Default

enum CardinalDirections{
    North,  
    East,
    South,
    West
}

let currentDirection = CardinalDirections.North;
console.log(CardinalDirections); 
// {
//   '0': 'North',
//   '1': 'East',
//   '2': 'South',
//   '3': 'West',
//   North: 0,
//   East: 1,
//   South: 2,
//   West: 3
// }
console.log(currentDirection);  //0

// currentDirection = "Norht";