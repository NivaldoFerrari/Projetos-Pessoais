const pessoa={//Obj
    nome:"Nivaldo",
    sobrenome:"Ferrari",
    filhos:{
        filho1:"FilhoUm",
        filho2:"FilhoDois"
    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.filhos.filho1)

//converter em json
 const p_json=JSON.stringify(pessoa)//convercao

 console.log(p_json)//pronta


 //de JSON pra obj
const pessoa1=`{"nome":"Nivaldo","sobrenome":"Ferrari","filhos":{"filho1":"FilhoUm","filho2":"FilhoDois"}}`

 const pessoajson=JSON.parse(pessoa1)
 console.log(pessoajson)//pronta
