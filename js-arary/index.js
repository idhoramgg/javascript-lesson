// let myArray = ["Learn Javascript", "Learn React", "Learn Nodejs"]

// // console.log(myArray);

// // check length
// // console.log(myArray.length);

// //check index
// // console.log(myArray[0]);
// // console.log(myArray[1]);
// // console.log(myArray[2]); // output index ke -2

// //merubah item didalam array
// myArray[0] = "Learn ES6"
// // console.log(myArray[0]);
// // console.log(myArray);

// // built in method loop
// //foreach
// // myArray.forEach(element => console.log(element)
// // )
// // .map()

// const arrayBaru = myArray.map(element => element)

// //pop
// //shift
// //unshift
// //push

// let siswa = ["Agung", "Budhi", "Dimas"]

// console.log(siswa);

// siswa.pop() // menghapus elemen dalam array, index akhir
// console.log(siswa);
// siswa.shift() // menghapus elemen dalam array, index pertama
// console.log(siswa);
// siswa.push('Chris') // menambah elemen dalam array, index terakhir
// console.log(siswa);
// siswa.unshift('Rumondang') // menambah elemen dalam array, index pertama
// console.log(siswa); 


// let arrayCampur = ["Danu", 9 , true, 7, "Jamal", false, 10, 12]

// console.log(arrayCampur.sort((a,b) => {return b-a}));

// // exercise 1

// let html = ''
// let jobs = ["Backend", "Full stack", "UI/UX", "Product manager"]

// jobs.forEach(item => {
//     html += `<li> ${item} </li>`
// })
// document.write(html)

// //

// let tim1 = ["chris", "agung", "angga"]
// let tim2 = ["dimas", "rum", "budi"]

// console.log(tim1.join(','));

// //

// let array1 = ['math', 'english','programming']
// let array2 = ['new', 'england', 'programming']

// for(var i=0; i<array1.length; i++){
//   array1[i] !== array2[i] ? console.log(`false, ${array1[i]} berbeda dengan ${array2[i]}`) : console.log(`true, ${array1[i]} sama dengan ${array2[i]}`)
// }

// 5
let tweet = []

let display = () => {
    let bodyy = ''
    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();

    tweet.forEach(item => {
        bodyy += ` <div class="box-p">
                    <p> ${item} </p>
                    <div class="iconTweet"> 
                    <span class="like">Like <i class="fa fa-thumbs-up" aria-hidden="true"></i></span>     
                    <span class="dislike">Dislike <i class="fa fa-thumbs-down" aria-hidden="true"></i></span>
                    </div>
                   </div>`
    })
    return bodyy
}
let saveTweet = event => {
    event.preventDefault()
    let form = document.getElementById('area').value
    if(form.length > 140){
        alert(`Maksimum karakter adalah 140`)
    }
    //
    if(form.length == 0){
        alert(`Isi apa yang kamu mau tulis`)
    } else {
        tweet.unshift(form)
        document.getElementById('twit').innerHTML = display()
    } 
}


