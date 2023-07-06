const caixa1=document.querySelector("#caixa1")// recebendo os elementos da caixa 1

const elemento=[...document.querySelectorAll(".curso")]

console.log(caixa1.children)//mostra todos os elementos filhos
console.log(caixa1.children[0])//mostra o elemento pelo o seu numero no array
console.log(caixa1.children[caixa1.children.length-1])//mostra o ultimo filho
console.log(caixa1.firstElementChild)//primeiro filho
console.log(caixa1.lastElementChild)//outra maneira de ultimo filho


console.log(document.getRootNode())//Retorna o no raiz

// children retorna os elementos filhos
console.log(caixa1.children.length > 0 ? "Possui Filhos" : "Não Possui Filhos")

console.log(elemento[0].children.length > 0 ? "Possui Filhos" : "Não Possui Filhos")

//mudando o conteudo da pagina
caixa1.firstElementChild.innerHTML="Mudar"


console.log(elemento[5].parentNode.children[4])//saindo de um elementro para outro