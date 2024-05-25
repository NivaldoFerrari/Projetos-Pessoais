function aluno(nome,nota){
    this.nome=nome//consegue jogar um parametro pra uma variavel de mesmo nome
    this.nota=nota//consegue jogar um parametro pra uma variavel de mesmo nome

    this.dados_anonimo=function(){//usando funcao aonima ela nao consegue ecessar os valores 
        setTimeout(function(){    // this nome e this nota
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const al1=new aluno("Nivaldo",10)// novo objs aluno

al1.dados_anonimo()
al1.dados_arrow()
