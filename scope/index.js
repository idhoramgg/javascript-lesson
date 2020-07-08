// let myName = "Raisha" // bersifat global

// const greeting = () => {
//     return myName; // myName global
// }

// console.log(greeting())

// console.log(myName)

const greeting = () => {
    let myName = "Raisha"
    return myName;
}

console.log(greeting())

console.log(myName)