let btnLogout = document.getElementById('logout')
let name = JSON.parse(localStorage.getItem('user'))
let text = `Selamat datang di Dashboard, ${name.name}`
document.getElementById('welcome').innerHTML = text

// endpoint
let endPoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";

const logout = (event) => {
    event.preventDefault()
    localStorage.clear()
    window.location.replace('./index.html')
}
btnLogout.addEventListener('click', logout)

const showList = async () => {
    let response = await fetch(endPoint)
    response = await response.json()
    let text = ""
    let userData = response.map(data => {
        text += `<li> ID: ${data.id} <br>
                      Name: ${data.name} <br> 
                      Email: ${data.email} <br>
                      Phone: ${data.phoneNumber} <br>
                      <button onclick="deleteData(${data.id})"> Delete </button>
        </li> <hr>`
    })
    document.getElementById('showList').innerHTML = text
    return userData
    // console.log(response);
}

const deleteData = async id => {
    let sure = confirm('Apakah kamu yakin ingin menghapus ?')
        // jika iya, kita akan request method DELETE pada API kita
    if(sure){
        let response = await fetch(`${endPoint}/${id}`, {
            method: 'DELETE'
        })
        response = response.json()

        if(id){
            alert(`Akun dengan ID ${id} berhasil dihapus`);
            window.location.reload()
        } else {
            alert(`Akun tidak ditemukan`)
        }
    } else {
        alert(`Hapus Akun dibatalkan`)
    }
}

showList()
