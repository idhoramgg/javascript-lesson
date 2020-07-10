
// object

// const siswa = {
//     nama: 'Agung',
//     umur: 21,
//     kesukaan: {
//         makanan: 'nasi',
//         minuman: 'es teh manis'
//     },
//     alamat: "Bogor",
//     sayHello : function(){
//         return `hello`
//     }
// }
// siswa.gender = "Laki-laki";

// siswa.umur = 22

// delete siswa.kesukaan;
// delete siswa.sayHello

// console.log(siswa);

// let number = {
//     originA: 2,
//     originB: 3
// };

// const changeData = obj => {
//     obj.originA = 6;
//     obj.originB = 12;
// }

// changeData(number)
// console.log(number.originA);
// console.log(number.originB);

let students = [
    {
        nama: 'Budhi',
        umur: 19,
        isMarried: true
    },
    {
        nama: 'David',
        umur: 26,
        isMarried: false
    },
    {
        nama: 'Dimas',
        umur: 7,
        isMarried: false
    },
];

students.forEach(student => {
    console.log(student.nama);
})

let obj = { 
    makanan: "nasi",
    minuman: "teh manis",
    suku: ["betawi", "dayak", "aborigin"]
}
console.log(obj.suku[1]);


let arr = ["nasi", "teh manis"];

let obj = { }


