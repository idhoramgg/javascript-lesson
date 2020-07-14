let btnRegister = document.getElementById('btn-register')
const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";

const register = async () => {
    try {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let fullName = document.getElementById('fullName').value;
        let phoneNumber = document.getElementById('phoneNumber').value;

        let userData = {
            email,
            password,
            fullName,
            phoneNumber
        }
        // variabel untuk menangkap data dari API
        let checkAPI = await fetch(API)
        // all user dalam bntuk json dari API
        let allUsers = await checkAPI.json()
        // filter user input dengan user di api, filterUser berupa array
        let filterUser = allUsers.filter(user => user.email === email);
        // check jika email sudah terdaftar
        if(email === ""){
            alert('harap lengkapi form')
        } else if(filterUser.length > 0){
            alert('Email sudah terdaftar')
        } else {
            //belum terdaftar dan  kita harus menyimpan semua data input user dari form HTML
            let response = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            let result = response.json();
            localStorage.setItem('userData',JSON.stringify(userData))
            // berikan informasi bahwa pendaftaran berhasil
            alert('terima kasih sudah mendaftar')
            window.location.replace('./login.html')
            return result
        }
        
                
    } catch(error){
        console.log(error);
    }
}



btnRegister.addEventListener('click', register)