/*  for(let i=0; i< 10; i++){
    console.log(i)
}
 */

/*  var numeros = [1,2,3,4,5,6,7,8]

for(let i=0;i< numeros.length; i++){
    console.log(numeros[i])
}
  */

 var personaje = {nombre: "superman", poder:"volar", edad:35}
console.log(Object.keys(personaje))

 for(let nombre in personaje ){
    console.log(personaje[nombre])
} 