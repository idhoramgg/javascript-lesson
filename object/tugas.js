
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
// console.table(convert(arr))

//3 
const csvToObject = text => {
    let result = {}
    let a =text.split(',')

    result.name = a[0];
    result.bootcamp = a[1];
    result.gender = a[2]
    
    return result
}

console.log(csvToObject('David Winalda, Impact Byte, Male'))