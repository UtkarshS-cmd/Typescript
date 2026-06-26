let x: unknown = "Hello"
console.log((x as string).length)

let y: unknown = "gseg"
console.log((<string>y))

let z = "65"
console.log(((z as unknown) as number))
