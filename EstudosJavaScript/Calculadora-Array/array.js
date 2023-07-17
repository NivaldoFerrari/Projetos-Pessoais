const caixaCursos=document.querySelector(".caixa")

const funcoes=["Valor1","valor2","Resultado"]

funcoes.map((elemento)=>{
    const paragrafo=document.createElement("div")
    paragrafo.innerHTML=elemento
    const label=document.createElement("label")
    paragrafo.appendChild(label)
    caixaCursos.appendChild(paragrafo)
})

let valores=[1,2,3,4,5]
const op=[
    (valores)=>{
        let res=0
        for(v of valores){
            res+=v
        }
        return res
    },
    (valores)=>{
        let res=0
        for(v of valores){
            res-=v
        }
        return res
    },    
    (valores)=>{
        let res=1
        for(v of valores){
            res*=v
        }
        return res
    },
    (valores)=>{
        let res=1
        for(v of valores){
            res/=v
        }
        return res
    }
   
]


const operadoes=["+","-","*","/",]
let operadoresMap=0
op.map(()=>{
    const botoes=document.createElement("button")
    botoes.innerHTML=operadoes[operadoresMap]
    operadoresMap++
    caixaCursos.appendChild(botoes)
})