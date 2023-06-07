/* 
Operadores logicos

&& and e <-possui tabela verdade
|| or ou <-possui tabela verdade
!  not nao

 */
let n1=10,n2=5,n3=15

console.log((n1>n2)&&(n1>n3))//retorna true somente quando todas as afirmacoes sao true

console.log((n1>n2)||(n1>n3))//retorna true quando alguma das afirmacoes sao true

console.log(!((n1>n2)&&(n1>n3)))//inverte o retorno do true ou false
