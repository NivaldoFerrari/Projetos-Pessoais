const p_array=document.querySelector("#array")
const txtapesquisar=document.querySelector("#txt_pesquisar")
const botaoPesquisa=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado") 

const elementos_array=[10,5,8,2,9,15,20]

p_array.innerHTML="["+elementos_array+"]"

botaoPesquisa.addEventListener("click",(evento)=>{
    resultado.innerHTML="Valor não encontrado."
    elementos_array.find((e,i)=>{
        if(e==txtapesquisar.value){
            resultado.innerHTML="O valor:" + e + "<br> foi encontrado <br>Na posição: " + (i+1)
            return e
        }
    })
    
})