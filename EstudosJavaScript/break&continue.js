n=0
max=50

 while(n<max){
    console.log(n)
    if(n > 10){
        break //para com a execucao do loop e segue o programa
    }
    n++
}

console.log("Findo do break") 

let pares=0

for(i=0;i < max;i++){
    if(i%2!=0){// se o resto da divisao do i for diferente de 0, ou seja impar
        continue// faz com que o loop nao execute os comandos seguintes mas segue os proximos passos do loop
    }
    pares++

}
console.log(pares)