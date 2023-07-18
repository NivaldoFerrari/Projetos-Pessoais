const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.querySelector("#btn_subtracao")
const btn_multiplicacao=document.querySelector("#btn_multipicacao")
const btn_divisao=document.querySelector("#btn_divisao")
const res=document.querySelector("#res")

function pegarValores(){
    const valores=[document.getElementById("valor1").value,document.getElementById("valor2").value]
    return valores
}


const op=[
    ()=>{
     const valoresOpreracao=pegarValores()
     res.value=Number(valoresOpreracao[0])+Number(valoresOpreracao[1])
    },
    ()=>{
        const valoresOpreracao=pegarValores()
        res.value=Number(valoresOpreracao[0])-Number(valoresOpreracao[1])
    },
    ()=>{
        const valoresOpreracao=pegarValores()
        res.value=Number(valoresOpreracao[0])*Number(valoresOpreracao[1])
    },
    ()=>{
        const valoresOpreracao=pegarValores()
        res.value=Number(valoresOpreracao[0])/Number(valoresOpreracao[1])
    },
   
]

btn_soma.addEventListener("click",()=>{op[0]()})
btn_subtracao.addEventListener("click",()=>{op[1]()})
btn_multiplicacao.addEventListener("click",()=>{op[2]()})
btn_divisao.addEventListener("click",()=>{op[3]()})

