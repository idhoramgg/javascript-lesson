let datas = JSON.parse(localStorage.getItem('userData'))
if(!datas){
    alert('silahkan register, atau login terlebih dahulu')
    window.location.replace('./index.html')
}