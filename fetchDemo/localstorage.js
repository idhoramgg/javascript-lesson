// set item
localStorage.setItem('user', JSON.stringify(users))

// get
let data = JSON.parse(localStorage.getItem('user'))

// delete
localStorage.clear()
