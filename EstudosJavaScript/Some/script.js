const p_array=document.querySelector("#array")
const txtapesquisar=document.querySelector("#txt_pesquisar")
const botaoPesquisa=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado") 

const elementos_array=[16,12,10,17,15,13,11,19]

p_array.innerHTML="["+elementos_array+"]"

botaoPesquisa.addEventListener("click",(evento)=>{
    const retorno=elementos_array.some((e,i)=>{//retorna true se algum (some) elementor condizer com as condicoes
        if(e<18){
            resultado.innerHTML="Valor n conforme na posição"+(i+1)
        }
        return e>=18
    })
    if(retorno){
        resultado.innerHTML="OK"
    }
})