// const range = (x, n) => {
//     let text = []
//     if(n == x) {
//         return 0
//     } else {
//          result = range(x + 1, n)
//          text.push(result)
//         console.log(result);
        
//         }
//     }
// console.log(range(2,6));

const range = (start, end) => {
    if(end - start == 2){
        return [start+1]
    } else if(end-start == 1){
        return 0
    } else if(end < start){
        return 0
    }
    else {
        let b = range(start, end-1)
        b.push(end-1)
        return b
        
    }      
}

console.log(range(4,2)) // 0
console.log(range(1,2)) // 0
console.log(range(1,3)); // 2
