let myArray = ["Learn Javascript", "Learn React", "Learn Nodejs"]

// console.log(myArray);

// check length
// console.log(myArray.length);

//check index
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]); // output index ke -2

//merubah item didalam array
myArray[0] = "Learn ES6"
// console.log(myArray[0]);
// console.log(myArray);

// built in method loop
//foreach
// myArray.forEach(element => console.log(element)
// )
// .map()

const arrayBaru = myArray.map(element => element)

//pop
//shift
//unshift
//push

let siswa = ["Agung", "Budhi", "Dimas"]

console.log(siswa);

siswa.pop() // menghapus elemen dalam array, index akhir
console.log(siswa);
siswa.shift() // menghapus elemen dalam array, index pertama
console.log(siswa);
siswa.push('Chris') // menambah elemen dalam array, index terakhir
console.log(siswa);
siswa.unshift('Rumondang') // menambah elemen dalam array, index pertama
console.log(siswa); 





