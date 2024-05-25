const materias=["HTML","CSS","JS","React"]

materias.map((elemento,indice)=>{//map percorre um array inteiro sempre ** o .map é a maneira de chamar esse loop que percorre todo o array
    console.log("Materia: " + elemento + " Numero: " + indice)
})

// elemento é o contedudo dentro do indice do array
// indice é o numero de cada casa do array

const dobrar=(e)=>e*2// arrow func
let num=["1","2","3","4","5"].map(dobrar)
console.log(num)
