//     // fetch
//     // promise
//     // async

// // const api = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";

// //  // fetch
// //     // option fetch

// // // using fetch
// // const getAccount = () => {
// //     fetch(api)
// //     .then(result => {
// //         // console.log(result);
// //         return result.json();
// //     })
// //     .then(data => { 
// //         let text = "";
// //         data.map(element => {
           
// //             const obj = {
// //                 email: element.email,
// //                 password: element.password
// //             };
// //              text += `
// //             <li> Email : ${obj.email} <br>
// //                  Password : ${obj.password} <br>
// //                  <hr>
// //             </li>
// //         `
// //             document.getElementById('show').innerHTML = text 
                        
// //         });
// //     })
// //     .catch(error => console.log("Error~", error))
// // }
// // getAccount()










// // let data = [12,31,35,64,124]
// //  // callback
// // data.forEach(function(element){
// //     return element
// // })
// // data.map(element => {
// //     return element
// // })

// // setTimeOut -> contoh async
// // const p1 = () => console.log('sesi 1 selesai');

// // const p2 = () =>{
// //     setTimeout(() =>{
// //         console.log("sesi 2 selesai");
// //     }, 2000)
// // }

// // const p3 = () => {
// //     p1()
// //     p2()
// //     setTimeout(() =>{
// //         console.log("sesi 3 selesai");
// //     }, 3000)
// // }

// // p3()

//  // expected output synchronously 
//  // sesi 1 selesai
//  // sesi 2 selesai
//  // sesi 3 selesai


// // Promises

// const contohPromise = () => {
//     new Promise((resolve, reject)=> {
//         let condition = true;
//         if(condition){
//             resolve('request fulfilled')
//         } else {
//             reject(new Error('terjadi kesalahan, reject'))
//         }
//     }).then(result => console.log(result))
//       .catch(error => console.log(error))
// }
// // contohPromise()

// // contoh Promise req API dengan fetch()
//     // fetch() -> function bawaan javascript untuk mengambil/mengolah data API
//     // fetch() -> option 
//     //               -> method
//     //                  -> head
//     //                  -> body

//     // get data from API
// const getDataAPI = () => {
//     // deklarasi API endpoint
//     const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";
//     // buat option method untuk fetch()
//     const option = {
//         method: "GET"
//     }
//     // buat variabel string kosong untuk di concat dengan data, nantinya
//     let text = ""
//     // jalankan fetch dengan api dan option yang kita buat
//     fetch(API, option)
//     // response pertama, kita ambil data json
//     .then(response => response.json())
//     // data yang berbentuk json kita manipulasi
//     .then(result => result.map(element => {
//         const account = {
//             email: element.email,
//             password: element.password
//         }
//         text += `
//                 <li> <hr>
//                     Email: ${account.email} <br> 
//                     Password: ${account.password} <br>
//                     <hr>
//                     <br>
//                 </li>
//         `
//         document.getElementById('show').innerHTML = text
//     }))
    
//     // jika terjadi kesalahan kita tangkap errornya
//     .catch(error => console.log(error, "ERROR"))
// }

// // getDataAPI()

// // async / await
// // async await function biasa

// //pengertian
// async = "mengubah function menjadi asynchronous"
// await = "menunda eksekusi hingga proses async selesai"

// // penulisan

// async function hello(){
//     let result = await 'Hellooo'
//     return result
// }
// // es6
// const hello1 = async () => {
//     let result = await 'Helloo'
//     return result
// }

// // contoh fetch data API menggunakan async/await

// const getDataAPIwithAsync = async () => {
//     const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/users";
//     const option = {
//         method: "GET"
//     }

//     let response = await fetch(API, option)
//     response = await response.json()
//     // console.log(response);
// }
// getDataAPIwithAsync()











// // const dataArray = [12,32,123,32,124,52]



// // async function

// const p1 = () => {
//     setTimeout(() => {
//         console.log('p1 selesai');
//     }, 4000)
// }

// const p2 = () => {
//   setTimeout(()=>{
//       console.log('p2 selesai');
//   },3000)
// }

// const p3 = () => {
//   p1()
//   p2()
//   console.log('p3 selesai');
// }



// // p3()

// // contoh sederhana promise
// const promiseFunc = () => {
//   new Promise((resolve, reject) => {
//       let condition = false;
//       if(condition){
//           resolve('fulfilled')
//       } else {
//           reject(new Error('error, rejected'))
//       }
//   }).then(result => console.log(result))
//     .catch(error => console.log(error))
// }

// // promiseFunc()

// // penulisan function async await
// // func biasa
// function getData(){
//     return 'Hello world'
// }

// const getData2 = () => {
//   return 'Hello world'
// }
// // func async await
// async function getData(){
//     let result = await fetch(api)
//     return result
// }
// // es6
// const getData23 = async () => {
//   let result = await "Hello world"
//   return result
// }

// /////////////////////////////////////////////


// // fetch()
// // promise based
// const fetchData3 = async () => {
//     const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/books"
//     const options = {
//         method: "GET"
//     }
//     let text = ""
//     let response = await fetch(API, options)
//     let result = await response.json()
//     result.map(data => {
//         let card = document.createElement('div');
//         card.classList.add('card')
//         text += `
//                 <button onclick="checkOne(${data.id})"class="btn-card" type="button"> 
//                 <div id="card" class="card">
//                  Titile : ${data.title} <br>
//                  Author : ${data.author} <br>
//                  Price: ${data.price} <br>
//                  Category: ${data.category} <br>
//                  <br> <img src="${data.image}">
//                  </div>
//                  </button>
//                 `
//             })
//             document.getElementById('container').innerHTML = text
// }

// // async await
// const fetchData2 = async () => {
//     const API = "https://5e92be81bbff810016969173.mockapi.io/api/v1/books"
//     const options = {
//         method: "GET"
//     }
//     try {
//         let text = ""
//         let response = await fetch(API, options)
//         let result = await response.json()

//         // book category ada 
//             // 1. Romance
//             // 2. Humor
//             // 3. Motivation
//             // 4. Horror
//             // 5. Mantap
//            document.getElementById('btn-search').addEventListener('click', function(e){
//             e.preventDefault()
//             let search = document.getElementById('search').value;
//             let filtered = result.filter(data => data.category === search)
            
           
//             if (filtered.length <= 0){
//                 result.map(data => {
//                     let card = document.createElement('div');
//                     card.classList.add('card')
//                     text += `
//                             <button onclick="checkOne(${data.id})"class="btn-card" type="button"> 
//                             <div id="card" class="card">
//                              Titile : ${data.title} <br>
//                              Author : ${data.author} <br>
//                              Price: ${data.price} <br>
//                              Category: ${data.category} <br>
//                              <br> <img src="${data.image}">
//                              </div>
//                              </button>
//                             `
//                         })
//                         document.getElementById('container').innerHTML = text
//             } else {
//                 filtered.map(data => {
//                     let card = document.createElement('div');
//                     card.classList.add('card')
//                     text += `
//                             <button onclick="checkOne(${data.id})"class="btn-card" type="button"> 
//                             <div id="card" class="card">
//                              Titile : ${data.title} <br>
//                              Author : ${data.author} <br>
//                              Price: ${data.price} <br>
//                              Category: ${data.category} <br>
//                              <br> <img src="${data.image}">
//                              </div>
//                              </button>
//                             `
//                         })
//                         document.getElementById('container').innerHTML = text
//             }
         

//         })
//     } catch(error){
//         console.log(error)
//     }
//  }


// cardElement = document.querySelector('.btn-card')

// const checkOne = async (id) => {
//     const API = `https://5e92be81bbff810016969173.mockapi.io/api/v1/users/${id}`
//     const options = {
//         method: "GET"
//     }
//     const res = await fetch(API, options)
//     const result = await res.json()
//     // if(result) {
//     //     history.pushState(result.id, null, './desc.html')
//     // }
//     alert(`
//         ID: ${result.id}
//         Full name: ${result.fullName}
//         Email: ${result.email}
//         Passowrd: ${result.password}
//         CreatedAt: ${result.createdAt}
//     `)
// }
// cardElement.addEventListener('click', checkOne)
// error handling async await ada 3 cara
// 1. if else condition
// 2. try catch
// 3. jangan buat error

// fetchData2()

function getAll() {
	renderProducts();
	document.getElementById('cat-mob').classList.remove('active');
	document.getElementById('cat-lap').classList.remove('active');
	document.getElementById('cat-all').classList.add('active');
}

function getRomance() {
	renderProducts('Romance');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-lap').classList.remove('active');
	document.getElementById('cat-mob').classList.add('active');
}


function getHumor() {
	renderProducts('Humor');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-mob').classList.remove('active');
	document.getElementById('cat-lap').classList.add('active');
}
function getMotivation() {
	renderProducts('Motivation');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-mob').classList.remove('active');
	document.getElementById('cat-lap').classList.add('active');
}
function getMantap() {
	renderProducts('Mantap');
	document.getElementById('cat-all').classList.remove('active');
	document.getElementById('cat-mob').classList.remove('active');
	document.getElementById('cat-lap').classList.add('active');
}

// render products based on given categories
async function renderProducts(cat) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML = "";
	// let data = JSON.parse(localStorage.getItem('products'));
    const API = `https://5e92be81bbff810016969173.mockapi.io/api/v1/books`
    const options = {
        method: "GET"
    }
    let response = await fetch(API, options)
    let data = await response.json()
    console.log(data);
    data.forEach(item => {
		if(cat) {
			if(item.category === cat) {
				productContainer.innerHTML += `
					<div class="product-item">
						<div class="prod-image">
							<img src="${item.image}" alt="">
						</div>
						<div class="prod-data" >
							<span id="prod-title">${item.title}</span>
							<span id="prod-price">$ ${item.price}</span>
							<p id="prod-description">${item.author} - ${item.category}</p>
							<form action="javascript:addToCart('${item.id}')" class="cart-btn">
								<button class="btn" id="add-to-cart" type="submit">Add to cart</button>
							</form>
						</div>
					</div>
					<div class="vertical-space"></div>
			`;
			}
		} else {
			productContainer.innerHTML += `
					<div class="product-item">
						<div class="prod-image">
							<img src="${item.image}" alt="">
						</div>
						<div class="prod-data" >
							<span id="prod-title">${item.title}</span>
							<span id="prod-price">$ ${item.price}</span>
							<p id="prod-description">${item.author} - ${item.category}</p>
							<form action="javascript:addToCart('${item.id}')" class="cart-btn">
								<button class="btn" id="add-to-cart" type="submit">Add to cart</button>
							</form>
						</div>
					</div>
					<div class="vertical-space"></div>
			`;
		}
	});

}
