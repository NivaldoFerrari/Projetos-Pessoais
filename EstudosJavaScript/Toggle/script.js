const caixaCursos=document.querySelector("#caixaCursos")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoveCurso=document.getElementById("btnRemoveCurso")

const btnAdicionaAntes=document.getElementById("btnAdicionaAntes")
const btnAdicionarDepois=document.getElementById("btnAdicionarDepois")
const nomeNovoCurso=document.getElementById("nomeCurso")

const tirarSelecao=()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((elemento)=>{
        elemento.classList.remove("selecionado")
    })
}

let indice=0

const criaDisplay=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evento)=>{
        tirarSelecao()
        evento.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((elemento,chave)=>{
    const novoElemento=criaDisplay(elemento)

    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
   
    return cursoSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evento)=>{
     try{
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
     }catch(ex){
        alert("Selecione um curso")
     }
    
})

btnRemoveCurso.addEventListener("click",()=>{
    
    
    try{///tente isso...
        const selecionado=cursoSelecionado()
        selecionado.remove()
    }catch{//...caso erro faça isso
        alert("Selecione um curso.")
    }
    
})

btnAdicionaAntes.addEventListener("click",(evento)=>{
        
    
    try{///tente isso...
        if(nomeNovoCurso.value!=""){
            const criaNovoCurso=criaDisplay(nomeNovoCurso.value)
            caixaCursos.insertBefore(criaNovoCurso,cursoSelecionado())
        }else{
            alert("Digite o nome do curso.")
        }
    }catch(ex){//...caso erro faça isso
        alert("Selecione um curso.")
    }

})

btnAdicionarDepois.addEventListener("click",(evento)=>{

try{///tente isso...
    if(nomeNovoCurso.value!=""){
        const criaNovoCurso=criaDisplay(nomeNovoCurso.value)
        caixaCursos.insertBefore(criaNovoCurso,cursoSelecionado().nextSibling)
    }else{
        alert("Digite o nome do curso.")
    }
}catch(ex){//...caso erro faça isso
    alert("Selecione um curso.")
}

})