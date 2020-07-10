
// intro
let obj = {
    nama: "Ridho",
    umur: 26,
    pekerjaan: "Impact Byte",
    lokasi: "Citayam",
    greeting(){
        return `Halo nama saya ${obj.nama} berusia ${obj.umur} tahun, bekerja di ${obj.pekerjaan}, dan tinggal di ${obj.lokasi}`
    }
}

// console.log(obj.greeting());

//1
const grouping = scores => {
    let result = {
        pass: [],
        fail: []
    }
    scores.forEach(element => {
        if(element < 75){
            result.fail.push(element)
        } else {
            result.pass.push(element)
        }
    })
    return result
}

// console.table(grouping([80, 45, 90, 65, 74, 100, 85, 30]));

//1 bagian 2

const grouping2 = scores => {
    let result = {
        phase1: [],
        phase2: [],
        phase3: [],
        phase4: []
    }
    scores.forEach(score => {
        if(score <= 30){
            result.phase1.push(score)
        } else if(score > 30 &&  score <=  60){
            result.phase2.push(score)
        } else if(score > 60 &&  score <= 80){
            result.phase3.push(score)
        } else if(score > 80 &&  score <= 100) {
            result.phase4.push(score)
        } else {
            console.log('error')
        }
    })
    return result
}
// console.log(grouping2([10, 20, 25, 30, 60, 55, 35, 31, 70, 75, 65, 61, 81, 55, 35, 31]));



//2

let arr = [
            [1, 'Ridho Majid', 'Back End Developer', 'Jakarta'],
            [2, 'David Winalda', 'Front End Developer', 'Bandung'],
          ]

const convert = data => {
    let result = []

    data.map(el => {
            const obj = {
            id: el[0],
            name: el[1],
            work: el[2],
            location: el[3]
        }
        result.push(obj)
    })
    return result
}
// console.table(convert([
//     [1, 'Ridho Majid', 'Back End Developer', 'Jakarta'],
//     [2, 'David Winalda', 'Front End Developer', 'Bandung'],
//     [3, 'Miftah faris', 'Mentor', 'Jakarta'],
//   ]))

//3 
const csvToObject = text => {
    let result = {}
    let a =text.split(',')

    result.name = a[0];
    result.bootcamp = a[1];
    result.gender = a[2]
    
    return result
}

// console.table(csvToObject('David Winalda, Impact Byte, Male'));
// console.table(csvToObject('Ridho Majid, Impact Byte, Male'));

// 4
// looping for in

// const deleteUndefinedKeys = (obj) => {
//  for(let mantap in obj){
//      if(obj[mantap] === undefined){
//          delete obj[mantap]
//      }
//  }
//  return obj
// }

// console.log(deleteUndefinedKeys({name: 'agungmubarok', age: undefined, email: 'agungmubarok@gmail.com'}))

let siswa = {
    nama: 'ridho',
    alamat: 'Citayam',
    usia: 26
}

for (let key in siswa){
    console.log(`key = ${key}, value= ${siswa[key]}`);  
}

