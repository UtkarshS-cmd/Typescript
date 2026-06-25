function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
//   c to aayega hi last -> p(bichke) + c
}

console.log(add(10,10,10,10,10));
// but the type must be an array as rest parameters are always arrays.

