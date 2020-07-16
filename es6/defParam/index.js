const add = (numArray = []) => {
    let total = 0;
    numArray.forEach(element => {
      total += element
    })
    return total;
  }
  console.log(add([21,21,32,32]))