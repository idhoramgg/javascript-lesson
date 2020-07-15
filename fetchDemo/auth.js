let data = JSON.parse(localStorage.getItem('user'))
if(!data){
    alert('silahkan register, atau login terlebih dahulu')
    window.location.replace('./index.html')
}