const materias=["HTML","CSS","JS","React"]
materias.map((elemento,indice)=>{//map percorre um array inteiro sempre
    console.log("Materia: " + elemento + " Numero: " + indice)
})

const dobrar=(e)=>e*2
let num=["1","2","3","4","5"].map(dobrar)
console.log(num)
