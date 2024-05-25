//Sem operador ternario
let num1=11
res1=num1%2

if(res1==0){
    console.log("Par")
}else{
    console.log("impar")
}

//Com operador ternario
let num2=10
//Teste logico ? se verdadeiro : se falso <== Estrutura do operador ternario
res2=(num2%2 ? "Par" : "impar") // resultado errado por causa da ordem errada nos 2 outros exemplos maneira de resolver
console.log(res2)
/* 
No operador ternario ?
0 = False => retorna o segundo valor depois di :
1 = True  => retorna o primeiro valor antes do :
Para o impar par funcionar corretamente devemos ter ! na operacao 
*/

let num3=10
res3=(!(num3%2) ? "Par" : "impar") //! negando a resposta do operador ternario
console.log(res3)

let num4=13
res4=(num4%2 ? "impar" : "Par") // invertendo a ordem do impar par
console.log(res4)