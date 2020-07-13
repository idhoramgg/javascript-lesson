let loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', login);
var endpoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users"

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // ambil semua data users


    fetch(endpoint)
        .then((response) => response.json())
        .then((results) => {
            let user = results.filter((result) => result.email === email);

            if (user.length > 0) {
                if (user[0].password === password) {
                    // Simpan data user yang login ke local storage
                    localStorage.setItem('user', JSON.stringify(user[0]));
                    
                    // redirect ke halaman profile
                    window.location.replace('./dashboard.html');
                } else {
                    alert(`Email atau password Anda salah`);
                }
            } else {
                alert('Anda belum terdaftar');
            }
        })
        .catch((error) => console.error(error));
}
