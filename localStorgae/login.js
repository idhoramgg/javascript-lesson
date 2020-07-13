let btnLogin = document.getElementById('btn-login')

const login = () => {
    let data = JSON.parse(localStorage.getItem('dataUser'))
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(data.username === username && data.password === password){
        alert('Login berhasil')
        window.location.replace('./profile.html')
    } else {
        alert('password salah')
    }

}

btnLogin.addEventListener('click', login)