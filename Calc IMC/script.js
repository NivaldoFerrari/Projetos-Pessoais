function calcula(){

    const result = document.getElementById('resultado');
    
    var avaliar = ` `;


    let imc = (peso.value/(altura.value*altura.value)).toFixed(2);

    console.log(imc);

    let paragrafo = document.getElementById("resultado").value;    

    

    if(imc < 17){
        result.style.color=`red`;

        avaliar  = avaliar +`Muito Abaixo do peso.`;
    }
    if(imc > 17 && imc <= 18.5 ){
        result.style.color=`orange`;

        avaliar  = avaliar +` Abaixo do peso.`;
    }
    if(imc > 18.5 &&  imc <= 25){
        result.style.color=`green`;

        avaliar  = avaliar +` Peso normal.`;
    }
     if(imc > 25 && imc <= 30){
        result.style.color=`orange`;

        avaliar  = avaliar +` Acima do Peso.`;
    }
    if(imc > 30 && imc <= 35){
        result.style.color=`red`;

        avaliar  = avaliar +` Obesidade 1.`;
    }
    if(imc > 35 && imc <= 40){
        result.style.color=`red`;

        avaliar  = avaliar +` Obesidade 2.`;
    } 
    if(imc > 40){
        result.style.color=`red`;
        avaliar = avaliar + ` Obesidade 3 (morbida).`
    }
    result.innerHTML = 'Seu imc é de: '+ imc + avaliar;
    
}


