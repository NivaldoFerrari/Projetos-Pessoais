function imparPar(){
    n1=10
    n2=2
    res=n1*n2
    if(res%2 == 0){
        return "par"
    }else{          //apenas um retorno por vez
        return "impar"
    }
}
imp=imparPar()//gardando o retorno em uma variavel
console.log(imparPar())//executando o retorno direto
console.log(imp)