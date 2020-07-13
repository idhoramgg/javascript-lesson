let btnRegister = document.getElementById('btn-register')

const register = () => {
    try {
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let fullName = document.getElementById('fullName').value;

        let userData = {
            username,
            email,
            password,
            fullName
        }
        if(userData){
            let str = localStorage.setItem('dataUser', JSON.stringify(userData))
            alert('Terima kasih sudah mendaftar')
            window.location.replace('./profile.html')
            return str
        }
                
    } catch(error){
        console.log(error);
    }
}



btnRegister.addEventListener('click', register)