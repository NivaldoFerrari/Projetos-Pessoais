function somar(...valores){// recebe quantos valores forem nescessrrios
    
    let result=0 //variavel que guarda a soma
    for(let v of valores){// usando um for of que percorre valores e atribue o valor de cada length em v
        result+=v //adiociona ovalor de cada v em result
    }
    return result
}
 console.log(somar(1,2,5,7))