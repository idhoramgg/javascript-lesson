// function biasa, agar konsisten kita membuat .map() dengan function biasa
function tampil(arr){
    let result =  arr.map(function(elem){
        console.log(elem);

    })
    return result
}
// arrow function
const tampil2 = arr2 => {
    let result = arr2.map(elem => {
        console.log(elem);
    })
    return result
}


// tampil([1,2,3,4,5,6,7])

// asnyc
const p1 = () => {
    console.log(`p1 telah selesai dijalankan`);
};

const p2 = () => {
    setTimeout(() => {
        console.log(`p2 selesai dijalankan`)
    },3000)
};

const p3 = () => {
    p1()
    p2()
    console.log(`p3 selesai dijalankan`);
};

p3();

// p1();
// p2();
// p3();

// Promisees

const janji = new Promise((resolve, reject) => {
    let condition = true;

    if(condition){
        resolve('Fulfilled')
    } else {
        reject(new Error('Rejection'))
    }
})
    janji
        .then(result => console.log(result))
        .catch(error => console.error(error))

// async/await

//pengertian
async = "mengubah function menjadi asynchronous"
await = "menunda eksekusi hingga proses async selesai"
// fetch adalah function bawaan JS untuk mengambil data dari API
// contoh function async non ES6
const olahData = async () => {
    let endpoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users"
    let response = await fetch(`${endpoint}`)
    response = await response.json()
    console.log(response);
}

//contoh menggunakan promises
const olahDenganPromise = () => {
    let endpoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users"
    fetch(endpoint)
    .then(response => {
        return response.json();
    })
    .then(response => {
        let text = ''
        let emails = response.map(data => data.email)
        
        emails.forEach(elem => {
            text += `<li> ${elem} </li>`
        })
        
        document.getElementById('show').innerHTML = text
        
    })
    .catch(error => {
        console.log(error);
    })
}

const register = () => {
    const NewUser = {
        name: req.body.name,
        
    }
    let endpoint = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";
    fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(user)
    })
}
// olahDenganPromise();
