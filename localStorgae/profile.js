let data = JSON.parse(localStorage.getItem('dataUser'))

let text = `Username: ${data.username} <br>
            Full Name: ${data.fullName} <br>
            Email: ${data.email}<br>
            <hr>
`
document.getElementById('profile').innerHTML = text


const logout = () => {
    localStorage.clear()
    window.location.replace('./login.html')
}

let btnLogout = document.getElementById('logout')
btnLogout.addEventListener('click', logout)
