
// intro
let obj = {
    nama: "Ridho",
    umur: 26,
    pekerjaan: "Impact Byte",
    lokasi: "Citayam",
    greeting(){
        return `Halo nama saya ${obj.nama} berusia ${obj.umur} tahun, bekerja di ${obj.pekerjaan}, dan tinggal di ${obj.lokasi}`
    }
}

console.log(obj.greeting());
