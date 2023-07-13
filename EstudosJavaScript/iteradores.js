const valores=[4,7,8,9,98,90,1,23,10]

const it_valores=valores[Symbol.iterator]()//iterador recebe um valor booleano dizendo se a colecao acabou ou nao
// esse valor fica armazenado na propiedade done
console.log(valores)
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//False nao acabou
console.log(it_valores.next().done)//True acabou

//Texto ou strings
const txt="Ferrari"

const it_txt=txt[Symbol.iterator]()//iterador recebe um valor booleano dizendo se a colecao acabou ou nao
// esse valor fica armazenado na propiedade done
console.log(txt)
console.log(it_txt.next().done)//False nao acabou
console.log(it_txt.next().done)//False nao acabou
console.log(it_txt.next().done)//False nao acabou
console.log(it_txt.next().done)//False nao acabou
console.log(it_txt.next().done)//False nao acabou
console.log(it_txt.next().done)//False nao acabou
console.log(it_txt.next().done)//False nao acabou
console.log(it_txt.next().done)//True acabou