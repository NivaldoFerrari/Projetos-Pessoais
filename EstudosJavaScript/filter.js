const idades=[15,21,30,17,18,44,12,50]

const maior=idades.filter((valor,indice,array)=>{//filtra um array e retorna ele modificado
    if(valor >= 18)
    return valor
})

const menores=idades.filter((valor,indice,array)=>{
    if(valor < 18)
    return valor
})

console.log(idades)
console.log(maior)
console.log(menores)
