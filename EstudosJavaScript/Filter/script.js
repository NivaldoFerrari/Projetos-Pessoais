const caixaCursos=document.querySelector("#caixaCursos")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoveCurso=document.getElementById("btnRemoveCurso")

const btnAdicionaAntes=document.getElementById("btnAdicionaAntes")
const btnAdicionarDepois=document.getElementById("btnAdicionarDepois")
const nomeNovoCurso=document.getElementById("nomeCurso")

let indice=0

const criaDisplay=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso")
    novoElemento.innerHTML=curso

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comando")

    const btnSelecionar=document.createElement("input")
    btnSelecionar.setAttribute("type","radio")
    btnSelecionar.setAttribute("name","cursoSelecinado")


    comandos.appendChild(btnSelecionar)

    novoElemento.appendChild(comandos)
    return novoElemento
}

cursos.map((elemento,chave)=>{
    const novoElemento=criaDisplay(elemento)

    caixaCursos.appendChild(novoElemento)
    indice++
})

const pesquisaSelecionado=()=>{
    const cursoRadios=[...document.querySelectorAll("input[type=radio]")]
    const radioSelecinados=cursoRadios.filter((elemento,indice,array)=>{
        return elemento.checked
    })
    return radioSelecinados[0]
}

btnCursoSelecionado.addEventListener("click",(evento)=>{
    const radioRetorno=pesquisaSelecionado()
    
    if(radioRetorno!=undefined){//se retorno diferente de indefinido...
        //const cursoSelecinado=radioSelecinado.parentNode.parentNode.firstChild.textContent
    const cursoSelecinado=radioRetorno.parentNode.previousSibling.textContent//Duas maneiras de se fazer o caminho ate o mesmo elemento

    alert("Curso Selecionado: " + cursoSelecinado)
    }else{//... caso contrario
        alert("Selecione um curso.")
    }
    
})

btnRemoveCurso.addEventListener("click",()=>{
    const cursoaRemover=pesquisaSelecionado()
    
    try{///tente isso...
        const selecionado=cursoaRemover.parentNode.parentNode;
    selecionado.remove()
    }catch{//...caso erro faça isso
        alert("Selecione um curso.")
    }
    
})

btnAdicionaAntes.addEventListener("click",(evento)=>{
        const cursoaCriar=pesquisaSelecionado()
    
    try{///tente isso...
        if(nomeNovoCurso.value!=""){
            const selecionado=cursoaCriar.parentNode.parentNode
            const criaNovoCurso=criaDisplay(nomeNovoCurso.value)
            caixaCursos.insertBefore(criaNovoCurso,selecionado)
        }else{
            alert("Digite o nome do curso.")
        }
    }catch(ex){//...caso erro faça isso
        alert("Selecione um curso.")
    }

})

btnAdicionarDepois.addEventListener("click",(evento)=>{
    const cursoaCriar=pesquisaSelecionado()

try{///tente isso...
    if(nomeNovoCurso.value!=""){
        const selecionado=cursoaCriar.parentNode.parentNode
        const criaNovoCurso=criaDisplay(nomeNovoCurso.value)
        caixaCursos.insertBefore(criaNovoCurso,selecionado.nextSibling)
    }else{
        alert("Digite o nome do curso.")
    }
}catch(ex){//...caso erro faça isso
    alert("Selecione um curso.")
}

})