// const add = (...args) => args.reduce((a,b)=> a+b)
  
// console.log(add(90,21,23))


const add = (...args) => {
    return args.reduce((a,b) => a+b)
}

console.log(add(20,12,20));
