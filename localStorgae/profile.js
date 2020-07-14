const welcome = () => {
    let localData = JSON.parse(localStorage.getItem('userData'))
    let welcome = `Selamat datang ${localData.fullName} !`
    document.getElementById('show').innerHTML = welcome;
}


const getData = async () => {
    const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";
    let response = await fetch(API)
    let datas = await response.json()
    let text = ""
    datas.map(data => {
        text += `
        Full Name: ${data.fullName} <br>
        Email: ${data.email}<br>
        Phone Number: ${data.phoneNumber}<br>
        <hr>` 
    })
document.getElementById('profile').innerHTML = text
}

const logout = () => {
    localStorage.clear()
    window.location.replace('./login.html')
}

let btnLogout = document.getElementById('logout')
btnLogout.addEventListener('click', logout)

welcome()
getData()
