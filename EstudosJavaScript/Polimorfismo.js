class Carro{
    constructor(tipo,estagio){
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
    }
}

const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)

c1.info()
c2.info()
c3.info()