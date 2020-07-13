var endpoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users"


let data = JSON.parse(localStorage.getItem('user'));
let user = data.name

// btn
document.getElementById('btnLogout').addEventListener('click', function(event){
    event.preventDefault();
    localStorage.clear();
    window.location.replace('./index.html')
})
let intro = ""
intro = `Welcome to the Dashboard, ${user}`
document.getElementById('welcome').innerHTML = intro

// fungsi untuk menampilkan semua data user

const tampilData = async () => {
    let response = await fetch(endpoint)
    response = await response.json()
    let text = ""
    let datas = response.map(data => {
        text += `<li> ID : ${data.id} <br>
                      Name : ${data.name} <br>
                      Email : ${data.email} <br>
                      Phone: ${data.phoneNumber}</li>
                      <button id="del" onclick=deleteData(${data.id})> Delete </button>
                      <button id="show" onclick=showData(event,${data.id})> Show </button>
                      <hr>
                      `
    })
    
    document.getElementById('showList').innerHTML = text
    return datas
}
// delete
const deleteData = async (id) => {
    // event.preventDefault();
    let sure = await confirm('Are u sure?')
    if(sure) {
        let response = await fetch(`${endpoint}/${id}`, {
            method: 'DELETE'
        })
        response = await response.json()
        if(id){
            alert(`delete dengan ID ${id} berhasil`)
            window.location.reload()
        } else {
        alert(`ID tidak ditemukan`)
        }    
    } else {
        alert('Delete Canceled')
    }
}

const showData = async (event, id) => {
    event.preventDefault();
    let response = await fetch(`${endpoint}/${id}`)
    response = await response.json()
    let text = ""
    if(response){
        alert(` 
               ID: ${response.id}
               Name: ${response.name}
               Email: ${response.email}
               Phone: ${response.phoneNumber}
        `)  
    }
}
tampilData()