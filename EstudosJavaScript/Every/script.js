const p_array=document.querySelector("#array")
const txtapesquisar=document.querySelector("#txt_pesquisar")
const botaoPesquisa=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado") 

const elementos_array=[21,25,19,20,16,18,22]

p_array.innerHTML="["+elementos_array+"]"

botaoPesquisa.addEventListener("click",(evento)=>{
    const retorno=elementos_array.every((e,i)=>{//valida o array inteiro baseado nas condicoes
        if(e<18){
            resultado.innerHTML="Valor n conforme na posição"+(i+1)
        }
        return e>=18
    })
    if(retorno){
        resultado.innerHTML="OK"
    }
})