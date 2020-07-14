let btnLogin = document.getElementById('btn-login')
const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";

const login = async () => {
    // let data = JSON.parse(localStorage.getItem('dataUser'))
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    // fetch untuk cek api apakah email sudah terdaftar atau belum
    const response = await fetch(API)
    let result = await response.json()
    // console.log(result)
    let users = result.filter(user => user.email === email);
    if(users.length > 0){
        if(users[0].password === password){
            localStorage.setItem('userData',JSON.stringify(users[0]))
            alert('Login sukses');
            window.location.replace('./profile.html')
        } else {
            alert('password yang anda masukan salah')
        }
    } else {
        alert('Akun tidak ditemukan, harap mendaftar')
        window.location.replace('./index.html')
    }

}

btnLogin.addEventListener('click', login)