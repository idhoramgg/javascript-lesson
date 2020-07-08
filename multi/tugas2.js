let bar = [
    ['Home', 'Profile'],
    ['News'],
    ['Setting', 'Accounts', 'Mantap'],
    ['Logout']
];

let text = ""

for(var i=0; i<bar.length; i++){
    for(var j=0; j<bar[i].length; j++){
        text += `${bar[i][j]} <br/>`
    }
 text += `<hr> <br/>`
}

document.getElementById('box').innerHTML = text

let students = [
    ["Nono", 25, "Matematika"],
    ["Nana", 25, "Matematika"],
    ["Nunu", 25, "Matematika"],
    ["Nene", 25, "Matematika"],
]
students.forEach(luar => {
    let data = `ID:${luar[0]}, Name: ${luar[1]}, Company: ${luar[2]}`
    console.log(data);
    document.write(`${data} <br>`)
    })
    