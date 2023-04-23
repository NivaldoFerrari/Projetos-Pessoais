
function retornaMaior() {
    //Receber os numeros e guardalos
    let numeroUm = document.getElementById('numero1').value;
    let numeroDois =  document.getElementById('numero2').value;

    //Paragrafo que irar mostrar o resultado
    let resultado = document.getElementById('resultado');


    //Primeira Comparação 
    if(numeroUm < numeroDois) {
        
        console.log(numeroDois);
        resultado.innerHTML='O Segundo número é o maior : '+ numeroDois;

    }else if(numeroUm > numeroDois){
        //Segunda comparação 
        console.log(numeroUm);
        resultado.innerHTML='O Peimeiro número é o maior : '+ numeroUm;

    }else{
        //caso iguais
        
        console.log('Números iguais');
        resultado.innerHTML='Os Números são iguais!';

    }

    

}