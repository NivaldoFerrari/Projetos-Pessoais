const tipoMilitar=document.querySelector("#f_tipoMilitar")
const tipoNormal=document.querySelector("#f_tipoNormal")

tipoMilitar.addEventListener("click",()=>{
    console.log("teste")
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