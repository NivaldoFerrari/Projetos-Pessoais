class Carro{
    constructor(nome,tipo){
        this.nome=nome
        if(tipo==1){
            this.tipo="Esportivo"
            this.vMax=404
        }else if(tipo==2){
            this.tipo="Utilitário"
            this.vMax=120
        }else if(tipo==3){
            this.tipo="Passeio"
            this.vMax=150
        }else{
            this.tipo="Militar"
            this.vMax=180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelocidade(){
        return this.vMax
    }
    getInfo(){
        return [this.nome,this.tipo,this.vMax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setvMax(vMax){
        this.vMax=vMax
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Maxima: ${this.vMax}`)
    }
}

let carr01=new Carro("Mareia",1)
let carr02=new Carro("sw4",2)
let carr03=new Carro("Astra",3)
let carr04=new Carro("Gurgel",4)

console.log(carr01)
console.log(carr02)
console.log(carr03)
console.log(carr04)

carr01.info()
carr02.info()
carr03.info()
carr04.info()

console.log(carr01.getNome())
console.log(carr02.getTipo())
console.log(carr03.getVelocidade())

console.log(carr04.getInfo())

carr01.setNome("Ferrari")

console.log(carr01.getInfo())

carr02.setTipo("Passeio")

console.log(carr02.getInfo())

carr03.setvMax(99)

console.log(carr03.getInfo())
