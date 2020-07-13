let datas = JSON.parse(localStorage.getItem('dataUser'))
if(!datas){
    alert('silahkan register, atau login terlebih dahulu')
    window.location.replace('./index.html')
}