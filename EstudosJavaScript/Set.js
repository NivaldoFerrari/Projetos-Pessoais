
let exSet=new Set(["elemento1","elemento2","elemento3","elemento4"])//Pode ser inicializado com elementos dentro porem nunca valores repitidos


exSet.add("elemento2")//add adiciona um valor 
exSet.add("elemento2")//poren so adiciona se nao for um valor ja existente 
exSet.add("elemento3")
exSet.add("elemento5")


console.log(exSet)

exSet.forEach((elementos)=>{//Percorre todos os elementos
    console.log(elementos)
})

let tamanho=exSet.size

console.log(tamanho)

exSet.delete("elemento1")//apaga um valor 

console.log(exSet)

exSet.clear()//limpa todas as chaves e respectivos valores

console.log(exSet)

