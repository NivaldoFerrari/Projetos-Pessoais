// if 
num=12

if(num >10)
    console.log("Maior ou igual que 10")//Se ha apenas um comando dentro do if nao e necessario {}

console.log("Fim do if")

// if & else
num2=9

if(num2 >10){
    console.log("Maior ou igual que 10")
}else{
    console.log("Menor que 10")
}

console.log("Fim do if else")

//if dentro de if

console.log("if else if")

num3=4

if(num3 > 10){
    console.log("Maior que 10")
}else if(num3 > 5){
    console.log("Maior que 5 menor que 10")
}else{
    console.log("Menor que 5")
}

console.log("Fim do if else if")

console.log("if dentro de if")

num4=50

if(num4 > 10){
    console.log("Maior que 10")
    if(num4 > 25){
        console.log("Maior que 25")
    }
}

// If com mais condicoes

vontade=100
clima="sol"
if(clima=="sol" && vontade==100){
    console.log("Vou Caminhar")
}else{
    console.log("Vou Estudar")
}