const tipoMilitar=document.querySelector("#f_tipoMilitar")
const tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const painelCarros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")

const carros=[]

tipoMilitar.addEventListener("click",(eento)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
tipoNormal.addEventListener("click",(eento)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute("disabled","disabled")
    f_municao.setAttribute("disabled","disabled")
})

const exibirCarros=()=>{
    painelCarros.innerHTML=""
    carros.forEach((c)=>{
        const div= document.createElement("div")
        div.setAttribute("class","carro")
        div.innerHTML=`Nome:${c.nome}<br> Portas:${c.portas}<br>Cor:${c.cor}<br>Blindagem:${c.blindagem}<br>Municação:${c.municao}`
        painelCarros.appendChild(div)
    })
}

btn_addCarro.addEventListener("click",()=>{
    if(tipoNormal.checked){
        const novoCarro=new Carro(f_nome.value,f_portas.value)
        carros.push(novoCarro)
    }else{
        const novoCarro=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
        carros.push(novoCarro)
    }
    exibirCarros()
})

class Carro{//Classe PAI / BASE
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }    
}

class Militar extends Carro{ //classe Filho
    constructor(nome,portas,blindagem,municao){//Esse obj recebe uma Herança do obj Carro
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const carro1=new Carro("Corolla",4)
carro1.ligar()
carro1.setCor("Preto")

const carro2=new Militar("Gurgel",2,100,50)
carro1.ligar()
carro1.setCor("Preto")

console.log(`Nome: ${carro1.nome}`)
console.log(`Portas: ${carro1.portas}`)
console.log(`Ligado: ${(carro1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${carro1.vel}`)
console.log(`cor: ${carro1.cor}`)

console.log(`Nome: ${carro2.nome}`)
console.log(`Portas: ${carro2.portas}`)
console.log(`Ligado: ${(carro2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${carro2.vel}`)
console.log(`cor: ${carro2.cor}`)