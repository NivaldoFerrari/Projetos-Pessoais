const p_array=document.querySelector("#array")
const txtapesquisar=document.querySelector("#txt_pesquisar")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado") 

const elementos_array=[1,2,3,4,5,]
const elementoAnterior=[]
const elementoAtual=[]
const arrayDobrado=[]

p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click",(evento)=>{
    arrayDobrado.push(elementos_array[0]*2)
    resultado.innerHTML=elementos_array.reduce((anterior,atual,posicao)=>{// como um map onde guarda o valor da posicao atual e o valor do retorno da posicao anterior
        elementoAnterior.push(anterior)
        elementoAtual.push(atual)
        arrayDobrado.push(atual*2)
        return  atual+anterior
    })    
    console.log(elementoAnterior)
    console.log(elementoAtual)
    resultado.innerHTML+="<br>Valor Anterior: " + elementoAnterior + "<br>Valor Atual: " + elementoAtual + "<br>Array Dobrado: " + arrayDobrado
})