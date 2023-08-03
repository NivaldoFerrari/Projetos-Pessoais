const Nave=function(energia){
    this.energia=energia
    this.municao=100
}

const nave1=new Nave(100)

console.log(nave1)

Nave.prototype.vidas=3// adiciona propiedade ou metodos ao obj

console.log(nave1.vidas)

Nave.prototype.disparar=function(){
    if (this.municao > 0){
        this.municao--
    }
}
nave1.disparar()

console.log(nave1.municao)
