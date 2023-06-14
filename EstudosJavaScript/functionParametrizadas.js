//Funcoes com parametros
function escreve(p1){
    console.log(p1)
}

escreve("ola mundo.")
escreve(2022)

function soma(n1,n2){
    console.log(n1+n2)
}

soma(10,5)
soma(10)//Se faltar um parametro a funcao nao ira funcionar

function soma2(n1=0,n2=0){
    console.log(n1+n2)
}

soma2(10)//Atibuindo valores padroes aos parametros a funcao funciona mesmo faltando parametros
soma2()

function soma3(n1=0,n2=0){
    return n1+n2
}
console.log(soma3(9,3))//console log assumindo o retorno da funcao

let padrao=0//posso colocar o valor padrao em uma variavel esterna
function soma4(n1=padrao,n2=padrao){
    return n1+n2
}
console.log(soma4(9,2))
