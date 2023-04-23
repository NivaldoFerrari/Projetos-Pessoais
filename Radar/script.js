//Velocidade maxima = 60km/h
//A cada 3km/h recebe um ponto na carteira
//Caso pontos maisor que 10 "Carteira Suspendida."

function verificarVelocidade(velocidade) {
    
    const proporcaoPontos = 3;
    const velocidadeMax = 70;
    const pontosMax = 12;

    if (velocidade <= velocidadeMax){

        console.log('ok');

    } else {

        const pontos = Math.floor(((velocidade - velocidadeMax) / proporcaoPontos));
        if (pontos >= pontosMax){
            console.log('Carteira Suspença')
        } else {
            console.log('Pontos', pontos)
        }

    }
}

verificarVelocidade(94);