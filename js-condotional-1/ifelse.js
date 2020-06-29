let job = prompt('Apa pekerjaan yang kamu cari?')

if(job === 'Front End Developer'){
    alert(`Jika saya sebagai ${job} maka tugas saya adalah menulis code bagian client / tampilan`);
} else if(job === 'Back End Developer') {
    alert(`Jika saya sebagai ${job} maka tugas saya adalah menulis code bagian server`);
} else if (job === "UI Designer"){
    alert(`Jika saya sebagai ${job} maka tugas saya adalah membuat design tampilan website `);
} else {
    alert(`${job} belum ada dalam sistem rekrutmen`);
}
