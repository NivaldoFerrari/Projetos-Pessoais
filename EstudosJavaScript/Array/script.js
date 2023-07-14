const caixa=document.querySelector("#caixa")
let cursos=["HTML","CSS","Javascript"]

console.log(cursos[0])//indique o indice para cada elemento

cursos.map((elemento)=>{
    const paragrado=document.createElement("p")
    paragrado.innerHTML=elemento
    caixa.appendChild(paragrado)
})

cursos[1]="C++"//Posso atribuir um novo valor pro elemento dentro do array
console.log(cursos[1])

cursos.push("Python")//adiciona um elemento no final do array
console.log(cursos)

cursos.pop()//retira o ultimo elemento do array
console.log(cursos)

cursos.unshift("Python")//adiciona um elemento no inicio do array
console.log(cursos)

cursos.shift()//retira o primeiro elemento do array
console.log(cursos)

let dados=[10,20,30]

cursos.push(dados)//posso colocar um Array dento do outro
console.log(cursos)//Criando uma estrutura de matrizes

console.log(cursos[3][1])//navegando em um array dentro do outro