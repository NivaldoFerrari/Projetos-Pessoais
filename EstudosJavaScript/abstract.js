class CarroPadrao{//Serve como base pra outras classes porem nao pode ser criado um o objeto com apenas essa classe, apenas complementada por outra
    constructor(){
        if(this.constuctor===CarroPadrao){
            throw new TypeError("Essa é uma classe abstrata")
        }

        //Podemos tembem obriar as outra classes umplementarem um metodo
        if(this.ligar===undefined){
            throw new TypeError("é obrigatorio o método ligar")
        }
        if(this.desligar===undefined){
            throw new TypeError("é obrigatorio o método desligar")
        }

        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,estagio){
        super()
    this.turbo=new Turbo(estagio)
    if(tipo == 1){
        this.vMax=120
        this.nome="Normal"
    }else if(tipo == 2){
        this.vMax=160
        this.nome="Esportivo"
    }else if(tipo == 3){
        this.vMax=200
        this.nome="Super ESportivo"
    }
    this.vMax+=this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.vMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
    }
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
}

class Turbo{
    constructor(e){
        if(e == 0){
            this.pot=0
        }else if(e == 1){
            this.pot=50
        }else if(e == 2){
            this.pot=75
        }else if(e == 3){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagio){
        super(4,estagio)
        this.vMax=300+this.turbo.pot
        this.nome="Especial"
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel.Max: ${this.vMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        console.log(`Turbo: ${this.ligado}`)
    }
}

const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)

c1.info()
c2.info()
c3.info()