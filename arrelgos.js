/*   var numeros = [1,2,3,4,5,6,7,8,9,10]
  console.log(numeros)
  const numerosAstring = numeros.join(' ')
  console.log(numerosAstring)

 */
  
const test ={
    opcion:{ },
    
    
}


const llaves = Object.keys(test)
const opciones = llaves.join(' ')

 switch(opciones){
    case 'opcion params':{
        console.log('opciones con parametros')
        break
    }
    case 'opcion':{
        console.log('solo opciones')
        break
    }


} 


  /*
numeros.forEach(numero => {
    console.log(numero)
})

const pares = numeros.filter(numero => numero % 2 === 0)
 */
/* var nombres = [{nombre: 'Pedro', apellido:'Picapiedra'},{nombre: 'Pablo', apellido:'Marmol'},{nombre: 'Homero', apellido:'Simpson'}]

//const objeto = nombres.find(buscar => buscar.apellido === 'Marmol')

const indice = nombres.findIndex(buscar => buscar.nombre === 'Pedro')
console.log(indice) */
//console.log(numeros)

//numeros.push(11)

//console.log(numeros)

//numeros.pop()
/* const newNumeeros = numeros.slice(1)


console.log(numeros)
console.log(newNumeeros) */