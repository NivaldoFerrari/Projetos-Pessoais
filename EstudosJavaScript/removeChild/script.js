const caixa1=document.querySelector("#caixa1")// recebendo os elementos da caixa 1

const elemento=[...document.querySelectorAll(".curso")]

const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

cursos.map((elemento,indice)=>{//elemento=contedudode cada loop, indice=numero respectivo do array
    const novoElemento=document.createElement("div")//crio um elemento

    novoElemento.innerHTML=elemento//adiciono conteudo do array nele
    novoElemento.setAttribute("id","c"+indice)//adiciono um ID usando o ondice do array para ser unico
    novoElemento.setAttribute("class","curso c1")//adiciono classes para estilo CSS
    
    const lixobt=document.createElement("img")
    lixobt.setAttribute("src","./Lixeira.png")
    lixobt.setAttribute("class","lixeira")
    lixobt.addEventListener("click",(evento)=>{
        caixa1.removeChild(evento.target.parentNode)
    })
   
    novoElemento.appendChild(lixobt)
   
    caixa1.appendChild(novoElemento)//adiciono o elemento a caixa 1 
    

})




