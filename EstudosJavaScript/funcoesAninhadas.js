const somar=val=>{
 let res=0
 for(v of val){
    res+=v
 }
 return res
}

const soma=(...valores)=>{
    return somar(valores)//uma funcao que chama outra
}

console.log(soma(10,5,15))