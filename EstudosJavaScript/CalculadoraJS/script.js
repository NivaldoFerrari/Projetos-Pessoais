const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const res=document.querySelector(".res")
const display=document.querySelector(".display")
const btlimpar=document.getElementById("tlimpar")
const btres=document.getElementById("tigual")
const btCopy=document.getElementById("tcPY")
const abreFecha=document.getElementById("abreFecha")
const conteudo=document.getElementById("conteudo")
const indicador=document.getElementById("indicador")



let sinal=false
let decimal=false

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evento)=>{
        sinal=false
        
        if(evento.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"    
                }else{
                    display.innerHTML+=evento.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evento.target.innerHTML          
        }

    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evento)=>{
        decimal=false
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evento.target.innerHTML=="X"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evento.target.innerHTML
            }
        }
    })
})

btlimpar.addEventListener("click",(evento)=>{
        sinal=false
        decimal=false
        display.innerHTML="0"
})

btres.addEventListener("click",(evento)=>{
        sinal=false
        decimal=false
        const res=eval(display.innerHTML)
        display.innerHTML=res
})

btCopy.addEventListener("click",()=>{
    navigator.clipboard.writeText(display.innerHTML)
})

abreFecha.addEventListener("click",(evento)=>{
    conteudo.classList.toggle("exibir")
    if(indicador.innerHTML=="Fechar"){
        indicador.innerHTML="Abrir"
    }else{
        indicador.innerHTML="Fechar"        
    }
   
})




