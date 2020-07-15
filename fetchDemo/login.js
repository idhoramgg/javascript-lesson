
// endpoint
let endPoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";

const login = async () => {
    // declare variabel yang mencatat isi input Form HTML
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try {
        // ambil semua data user
        let response = await fetch(endPoint);
        response = await response.json()
        // cek data apakah user input email dan password sesuai dengan data di API.
        let users = response.filter(user => user.email === email);
            if(users.length > 0) {
                if(users[0].password === password){
                // simpan data user login di localStorage
                localStorage.setItem('user', JSON.stringify(users[0]))
                // berikan informasi login berhasil
                alert(`Login Sukses`)
                // redirect browser ke tampilan utama / dashboard
                window.location.replace('./dashboard.html');
            }else {
                // jika password tidak sama dengan data di API
                 alert(`password yang anda masukan salah`)
            }
         } else {
             // jika user tidak ditemukan
             alert(`Anda belum terdaftar silahkan mendaftar di halaman register`);
             window.location.replace('./index.html')
         }
         // jika terjadi kesalahan pada koneksi
    } catch(error){
        console.log(error)
    }
  
}
let btnLogin = document.getElementById('login-btn');
btnLogin.addEventListener('click', login);
