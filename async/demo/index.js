let registrationBtn = document.getElementById('registration-btn');
registrationBtn.addEventListener('click', register);

var endpoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users"

async function register() {
    try {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let phoneNumber = document.getElementById('phoneNumber').value;

        let userData = {
            name,
            email,
            password,
            phoneNumber
        };

        // Cek email sudah terdaftar atau belum

        let response = await fetch(endpoint);
        let allUsers = await response.json();

        let registeredUser = allUsers.filter((user) => user.email === email);

        // Kalau sudah terdaftar
        if (registeredUser.length > 0) {
            alert(`Email telah digunakan`);
        } else {
            // Kalau belum terdaftar, lakukan registrasi
            let options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData),
            };
            let response = await fetch(endpoint, options);
            let result = await response.json();

            alert(`Terima kasih sudah mendaftar`);
            window.location.replace('./login.html');
            return result
        }
    } catch (error) {
        console.error(error);
    }
}
