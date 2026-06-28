//literal types
let myName: "Bob" = "Bobby"
const myName2: "Bob" = "Bob"
//literal types are used to define a variable that can only have a specific value. In this case, the variable myName is defined as a literal type "Bob", which means it can only be assigned the value "Bob". However, in the code snippet, myName is assigned the value "Bobby", which is not allowed and will result in a TypeScript error.

//Unions
type User = {
    username: string
    role: "admin" | "member" | "guest" //role hi ek union type bnaadiya type se
}
type userRole = "admin" | "member" | "guest" //userRole hi ek union type bnaadiya type se
let userRole: userRole = "member"
