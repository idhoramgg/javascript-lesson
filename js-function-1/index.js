// 1. function toko kita
const greetSeller = (cust, product) => {
    return `Terima kasih ${cust}, telah membeli produk ${product}`
}

console.log(greetSeller('Ridho', 'Sepatu'))


// 2.helper function

const multiplyByNineFifths = number => {
    return number * (9/5)
};
const getFahrenheit = celcius => {
    return multiplyByNineFifths(celcius) + 32;
};
// ----------------------------------- //

const toCel = number => {
    return number - 32
}
const getCelcius = fahrenheit => {
    return toCel(fahrenheit) * (5/9);
}
console.log(getFahrenheit(20));
console.log(getCelcius(68));

//4
const ubahString = string => string.toLowerCase()
console.log(ubahString('TOLOWERCASE ADALAH STRING METHOD YANG SANGAT MANTAP'));

 



