//Exercicio Nested Loops.
//Loops "Amarrados".

function tabuada (){
    
        let contas = document.getElementById('dentro');

    for(let i = 1; i <= 10 ; i++){
         console.log('tabuada', i );
         contas.innerHTML += "Tabuada do: " + i + '<br>';

         for (let j = 1; j <=10; j++){
            console.log(i ,' vezes ' , j , (j*i));
            contas.innerHTML += i+ " X " + j+  "="+ (j*i) + '<br>'; 
            

         }
        
    }
}
tabuada();