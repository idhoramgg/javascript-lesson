
// Spread Operator

// let array1 = [1,2,3,4,5,6,7,8,9]

// // menggunakan spread Operator untuk mengkopi nilai array1

// // array1.push('baru')

// let array2 = [...array1, 'pertama', 'kedua']

// console.log(array1, `ini array 1`) // arr1
// console.log(array2, `ini array 2`) // arr2

let siswa1 = {
    name: 'ridho',
    age: 26
}

let alamatSiswa1 = {
    ...siswa1,
    alamat: 'Depok'
}

console.log(alamatSiswa1);
