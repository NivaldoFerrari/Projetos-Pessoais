function* cores(){
    yield "Vermelho"//1 execucao
    yield "Verde"//2 execucao
    yield "Azul"//3 execucao
}

let itCores=cores()//Declaracao
console.log(itCores)//Declaracao
console.log(itCores.next().value)//1 execucao
console.log(itCores.next().value)//2 execucao
console.log(itCores.next().value)//3 execucao
console.log(itCores.next().value)//4 execucao indefinida pois acabaram os yield

function* perguntas(){
    const nome=yield "Qual o seu nome?"
    const sobrenome=yield "Qual o seu sobrenome?"
    return "Seu nome completo é " + nome + " " + sobrenome
}

const itperguntas=perguntas()
console.log(itperguntas.next().value)
console.log(itperguntas.next("Nivaldo").value)
console.log(itperguntas.next("Ferrari").value)

function* contador(){//contador infinito
    i=0
    while(true){
        yield i++
    }
}

const itcontador=contador()
for(let e=0; e<10; e++){//limitando o contador no loop for
    console.log(itcontador.next().value)
}
//outro exemplo parecido abaixo
function* contador2(){//contador infinito
    e=0
    while(true){
        yield e++
        if(e>10){// limitando o contador dentro da funcao geradora
            break
        }
    }
}

const itcontador2=contador2()
for(let v of itcontador2){
    console.log(v)
}