let num=[10,20,30,40,50]

for (let i=0; i< num.length;i++){
    console.log(num[i])//posicao
}


for(n in num){
    console.log(n)//posicao
}

for(n of num){
    console.log(n)//elementos
}