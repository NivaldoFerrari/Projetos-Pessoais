

function fizzBuzz(entrada){

    if((entrada % 3 === 0) && (entrada % 5 === 0)){
        
        return " FizzBuzz ";
    }

    if(entrada % 3 === 0){

        return " Fizz ";
    }

    if(entrada % 5 === 0){
        
        return " Buzz ";
    }
    else{
        return ' ' + entrada +' ';
    }
}

function fazFB() {
    let paragrafo = document.getElementById('fundo');
    let amostra = document.getElementById('amostra');
    let texto = " ";
    let contador = 0;
  
    const intervalId = setInterval(() => {
      contador++;
      paragrafo.innerHTML =  texto =( texto + fizzBuzz(contador));
      amostra.innerHTML = fizzBuzz(contador);

      if (contador === 1000) {
        clearInterval(intervalId);
        console.log("Contagem finalizada");
      }
    }, 500); // intervalo de 0.5 segundos
  }

  
    


    
    
    

    

