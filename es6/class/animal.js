 export class Animal {
	constructor(type, legs){
		this.type = type;
      	this.legs = legs;
    }
  makeNoise(sound = "Loud Noise"){
  	console.log(sound)
  }
  
}
