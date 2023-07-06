const caixa1=document.querySelector("#caixa1")// recebendo os elementos da caixa 1

const elemento=[...document.querySelectorAll(".curso")]

console.log(caixa1.children)//mostra todos os elementos filhos
console.log(caixa1.children[0])//mostra o elemento pelo o seu numero no array
console.log(caixa1.children[caixa1.children.length-1])//mostra o ultimo filho
console.log(caixa1.firstElementChild)//primeiro filho
console.log(caixa1.lastElementChild)//outra maneira de ultimo filho


console.log(document.getRootNode())//Retorna o no raiz