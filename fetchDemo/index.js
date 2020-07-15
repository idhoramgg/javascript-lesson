// declare endpoint mock API
let endPoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";

const register = async () => {
    try {
        // ambil isi data dari form HTML
        let name  = document.getElementById('name').value;
        let email  = document.getElementById('email').value;
        let password  = document.getElementById('password').value;
        let phoneNumber  = document.getElementById('phoneNumber').value;

        let userData = {
            name,
            email,
            password,
            phoneNumber
        };
        // cek email user apakah sudah terdaftar atau belum
        const response = await fetch(endPoint);
        let allUser = await response.json()
        // filter registered user
        let registeredUser = allUser.filter(user => user.email === email);
        // jika user sudah terdaftar
        if(registeredUser.length > 0){
            alert(`Email sudah terdaftar`)
        } else {
            // kalau belum terdaftar, simpan data dari form HTML
            let options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData)
            };
            let response = await fetch(endPoint,options);
            let result = await response.json();
            // berikan informasi pendaftaran berhasil dan browser redirect ke halaman login
            alert(` Terima kasih sudah mendaftar `);
            window.location.replace('./login.html')
            return result
        }

    } catch(error){
        console.log(error);
    }
}

let registrationBtn = document.getElementById('registration-btn');
registrationBtn.addEventListener('click', register);