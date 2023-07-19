let chaveValor=new Map()//Dieferente de array os elementos sao adicionados com uma chave unica junto


chaveValor.set("Chave","Valor")//Set adiciona um valor: "Chave" & "Valor"
chaveValor.set(1,"Nivaldo")
chaveValor.set("Ferrari",2)
chaveValor.set(3,4)

console.log(chaveValor)

chaveValor.forEach((elementos)=>{//Percorre todos os elementos
    console.log(elementos)
})

let tamanho=chaveValor.size

console.log(tamanho)

chaveValor.delete(1)//apaga um valor usando uma chave

console.log(chaveValor)

chaveValor.clear()//limpa todas as chaves e respectivos valores

console.log(chaveValor)

if (chaveValor.has(1)){//verifica a existencia de uma chave
    console.log("Tem")
}else{
    console.log("Não Tem")
}
