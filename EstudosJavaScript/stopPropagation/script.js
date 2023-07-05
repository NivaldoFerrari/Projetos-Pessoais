const caixa1=document.querySelector("#caixa1")// recebendo os elementos da caixa 1

const elemento=[...document.querySelectorAll(".curso")]


caixa1.addEventListener("click",()=>{
    console.log("click")
})

elemento.map((elm)=>{
    elm.addEventListener("click",(evento)=>{
        evento.stopPropagation()
    })
})