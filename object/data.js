    export let students = [
    {
        name: 'Budhi Artha',
        umur: 26,
        location: 'Bali',
    },
    {
        name: 'Agung Mubarok',
        umur: 15,
        location: 'Bogor',
    },
    {
        name: 'Angga Prasetya',
        umur: 18,
        location: 'Bandung',
    },
    {
        name: 'Chris Yeo',
        umur: 20,
        location: 'Bali',
    },
    {
        name: 'Rumondang T',
        umur: 25,
        location: 'Jakarta',
    },
    {
        name: 'Dimas Aditya',
        umur: 24,
        location: 'Riau',
    }, 
]
    export const viewData = (arr) => {
   let result = ''
    arr.forEach(ar => {
        result += ` <li> Name: ${ar.name}, Umur: ${ar.umur}, Location: ${ar.location} </li>`
    })
    return result
}

document.getElementById('test').innerHTML = viewData(students)