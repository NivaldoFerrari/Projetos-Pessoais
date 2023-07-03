const caixa1=document.querySelector("#caixa1")// recebendo os elementos da caixa 1
const caixa2=document.querySelector("#caixa2")// recebendo os elementos da caixa 2
const btn=document.querySelector("#btn_tranferir")// recebendo o botao
const todosCursos=[...document.querySelectorAll(".curso")]// recebendo os elementos da caixa 1

todosCursos.map((elemento)=>{//loop pra adicionar ...
    elemento.addEventListener("click",(evt)=>{//... o evento(evt) click no elemento
        const curso=evt.target
        curso.classList.toggle("selecionado")//toggle funciona como um pn/off onde se estiver on passa pra off e vise-versa
    })
})

btn.addEventListener("click",()=>{//Adicionado o evento de click ao botao
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]//tranformando em array todos os elementos selecionados
    const cursosNotSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]// .curso:not(.selecionado) Retornar os elementtos dentro de .curso que n tem a classe ,selecionado

    
    cursosSelecionados.map((cursosSele)=>{//percorrento todos os elementos selecionado
        caixa2.appendChild(cursosSele)//appendChild adicciona um filho a div caixa2
    })
    cursosNotSelecionados.map((cursosSele)=>{//percorrento todos os elementos selecionado
        caixa1.appendChild(cursosSele)//appendChild adicciona um filho a div caixa1
    })
})

