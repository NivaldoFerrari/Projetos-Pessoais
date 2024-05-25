const anonima=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(anonima)//mostra apenas que se trata de uma funcao
console.log(anonima(7,3))//retona a operacao da funcao


//Funcao Construtor

const f=new Function("v1","v2","return v1+v2")// funcao construtora anonima
console.log(f(7,5))//retona a operacao da funcao
