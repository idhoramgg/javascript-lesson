// multidimensional array

let inventory = [
    ['kaos polos', 4],
    ['celana jeans', 6],
    ['sepatu', 3]
];

//akses array table
// console.table(inventory)
// console.table(inventory[2][1]);
inventory.map(item => {
    let terjual = 100 - item[1];
    item[2] = terjual
})

console.log(inventory)