function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(1,2,3))
console.log(add(1,2))