let inventory = [
    ['baju', 12],
    ['celana jeans', 5],
    ['topi', 20]
]
// inventory.push(['kaos kaki', 20])

inventory.map(item => {
    let terjual = 100 - item[1];
    item[2] = terjual
})
// console.table(inventory);
// console.table(inventory);


// inventory.forEach(baris => {
//     baris.forEach(column => {
//         console.log(column); 
//     })
// })
inventory.forEach(baris => {
    baris.forEach(column => {
        console.log(column)
    })
    
})

// looping for

// for (var i=0, l1= inventory.length; i < l1; i++){
//     for(var j=0, l2=inventory[i].length; j<l2; j++){
//         document.write(`<p> ${inventory[i][j]} </p>`)
//     }
// }