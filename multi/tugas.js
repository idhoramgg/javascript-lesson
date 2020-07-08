
// soal 1

let student = [
    [1, 'Budhi', 'Impact Byte'],
    [2, 'Chris', 'Impact Byte'],
    [3, 'Rumondang', 'Impact Byte'],
    [4, 'Agung', 'Impact Byte'],
    [5, 'Angga', 'Impact Byte'],
    [6, 'Dimas', 'Impact Byte'],
  ]
  
student.forEach(luar => {
let data = `ID:${luar[0]}, Name: ${luar[1]}, Company: ${luar[2]}`
// console.log(data);
})


let students = 'david:davidwinalda94@gmail.com:male,ridho:ridho@gmail.com:male';
console.log(students);

// ngerubah string menjadi array

let step1 = students.split(',');
console.log(step1);

let result = step1.map(element => element.split(':'));
console.log(result);





