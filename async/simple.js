    // fetch
    // promise
    // async

// const api = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";

//  // fetch
//     // option fetch

// // using fetch
// const getAccount = () => {
//     fetch(api)
//     .then(result => {
//         // console.log(result);
//         return result.json();
//     })
//     .then(data => { 
//         let text = "";
//         data.map(element => {
           
//             const obj = {
//                 email: element.email,
//                 password: element.password
//             };
//              text += `
//             <li> Email : ${obj.email} <br>
//                  Password : ${obj.password} <br>
//                  <hr>
//             </li>
//         `
//             document.getElementById('show').innerHTML = text 
                        
//         });
//     })
//     .catch(error => console.log("Error~", error))
// }
// getAccount()










// let data = [12,31,35,64,124]
//  // callback
// data.forEach(function(element){
//     return element
// })
// data.map(element => {
//     return element
// })

// setTimeOut -> contoh async
// const p1 = () => console.log('sesi 1 selesai');

// const p2 = () =>{
//     setTimeout(() =>{
//         console.log("sesi 2 selesai");
//     }, 2000)
// }

// const p3 = () => {
//     p1()
//     p2()
//     setTimeout(() =>{
//         console.log("sesi 3 selesai");
//     }, 3000)
// }

// p3()

 // expected output synchronously 
 // sesi 1 selesai
 // sesi 2 selesai
 // sesi 3 selesai


// Promises

const contohPromise = () => {
    new Promise((resolve, reject)=> {
        let condition = true;
        if(condition){
            resolve('request fulfilled')
        } else {
            reject(new Error('terjadi kesalahan, reject'))
        }
    }).then(result => console.log(result))
      .catch(error => console.log(error))
}
contohPromise()

// contoh Promise req API dengan fetch()
    // fetch() -> function bawaan javascript untuk mengambil/mengolah data API
    // fetch() -> option 
    //               -> method
    //                  -> head
    //                  -> body

    // get data from API
const getDataAPI = () => {
    // deklarasi API endpoint
    const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";
    // buat option method untuk fetch()
    const option = {
        method: "GET"
    }
    // buat variabel string kosong untuk di concat dengan data, nantinya
    let text = ""
    // jalankan fetch dengan api dan option yang kita buat
    fetch(API, option)
    // response pertama, kita ambil data json
    .then(response => response.json())
    // data yang berbentuk json kita manipulasi
    .then(result => result.map(element => {
        const account = {
            email: element.email,
            password: element.password
        }
        text += `
                <li> <hr>
                    Email: ${account.email} <br> 
                    Password: ${account.password} <br>
                    <hr>
                    <br>
                </li>
        `
        document.getElementById('show').innerHTML = text
    }))
    
    // jika terjadi kesalahan kita tangkap errornya
    .catch(error => console.log(error, "ERROR"))
}

// getDataAPI()

// async / await
// async await function biasa

//pengertian
async = "mengubah function menjadi asynchronous"
await = "menunda eksekusi hingga proses async selesai"

// penulisan

async function hello(){
    let result = await 'Hellooo'
    return result
}
// es6
const hello1 = async () => {
    let result = await 'Helloo'
    return result
}

// contoh fetch data API menggunakan async/await

const getDataAPIwithAsync = async () => {
    const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";
    const option = {
        method: "GET"
    }

    let response = await fetch(API, option)
    response = await response.json()
    console.log(response);
}
getDataAPIwithAsync()


































