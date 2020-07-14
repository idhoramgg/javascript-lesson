const mainFunc = (number1,number2,callBack) => { 
    console.log(number1 + number2)
    callBack()  
  }
  
  const myCallback =() =>{ 
    console.log ('Done !')
  }
  
  mainFunc(1,2,myCallback) // output 3 Done!