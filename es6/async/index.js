// Promise

// const getData = () => {
    //     fetch(uri)
    //     .then((response) => response.json())
    //     .then(json => console.log(json.results))
    //     .catch(error => console.log('failed'))
    // }
    // getData();
    
    
    const uri = "https://pokeapi.co/api/v2/pokemon/"

    const getData = async () => {
        const response = await fetch(uri);
        const json = await response.json()
        console.log(json)
    }
    getData()


// const getData = async () => {
//     var poke = []
//     const response = await fetch(uri);
//     const json = await response.json();
//     const result = json.results
//     // console.log(poke);
//     let str = ""
//     for(poke of result){
//         str += `<li> ${poke} </li>` 
//     }
//     document.getElementById('test').innerHTML = str
//     console.log(json);
    
// }
// getData()

    const getOne = async () => {
        let name = prompt('masukan nama pokemon');

        const response = await fetch(`${uri}${name}`);
        const json = await response.json();
        
        const pokeName = json.name
        const pokeImage = await json.sprites.back_default;

        let src = `
        <h3> ${pokeName} </h3>
        <img src="${pokeImage}" />
        `

        // console.log(pokeImage); 

        document.getElementById('test').innerHTML = src
    }
    getOne()