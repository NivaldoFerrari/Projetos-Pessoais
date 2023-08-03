class Npc{
    static alerta=false// atributos
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Energia: ${Npc.alerta?"sim":"nao"}`)
        console.log(`===================`)
    }
    static alertar=function(){//metodo
        Npc.alerta=true
    }
}

const npc1=new Npc(100)
const npc2=new Npc(80)
const npc3=new Npc(30)

Npc.alertar()// usando um metodo mudas todo os atrbibutos

npc1.info()
npc2.info()
npc3.info()