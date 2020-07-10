// 1
const gcD = (num1, num2) => {
    if(!num2){
        return num1;
    } else {
        return gcD(num2, num1 % num2);
    }

}
console.log(gcD(20, 322));

//2
let activities = [
    ['Coding', 9],
    ['Eat', 1],
    ['Netflix', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

let activity, percent, total=24;
    activities.map(act => {
        percent = Math.round((act[1] / total) * 100);
        activity = `| Activity: ${act[0]} | Duration: ${act[1]}hrs | ${percent}% |`
        console.table(activity)
    }); 


//3

let data = {
    nama: 'David Winalda',
    noHP: '081234567',
    umur: 25,
    provinsi: 'DKI Jakarta',
    negara: 'Indonesia',
    history: [
      {
        food: [
          {
             namaResto: 'Ketoprak mang jupri',
             lokasiResto: 'Palmerah',
             status: true, // Makanan sudah diantar
             date: '01 April 2020'
          },
          {
            namaResto: 'Nasi udu mpok tini',
            lokasiResto: 'Palmerah',
            status: false, // Makanan masih dalam perjalanan
            date: '01 April 2020'
         },
        ],
      },
      {
        ride: [
          {
            lokasiTujuan: 'Binus University',
            status: true, // 'Sudah sampai tujuan'
            date: '01 April 2020'
          },
          {
            lokasiTujuan: 'Menara Mandiri',
            status: false, // 'Masih dalam perjalanan'
            date: '01 April 2020'
          }
        ]
      },
    ]};

    let a = data.history[1].ride
    let b = data.history[0].food
    let c = [a, ...b]
    console.log(a);
    
    

    let ride = data.history.map(e => e.ride)
    let d;
    let text = ''
    ride[1].forEach(elemen => {
        text += `<div class="card">
        <div class="foto">
            <div class="fotoimage">        
            </div>
        </div>
        <div class="nametag">
            <h3 id="nametag">${elemen.lokasiTujuan}</h3>
            <h5 id="status">${elemen.status}</h5>
            <h5 id="time">${elemen.date}</h5>
        </div>

    </div>`
    })
    

    document.getElementById('nametag').innerHTML = data.nama
    document.getElementById('nohp').innerHTML = data.noHP
    document.getElementById('age').innerHTML = data.umur
    document.getElementById('location').innerHTML = `${data.provinsi}, ${data.negara}`
    document.getElementById('test').innerHTML = text
