/* 
Tabalha diretamento no binario

*/
let n1=10
let n2=11

let res=n1 & n2
/* 
Em binario

n1=1010 
n2=1011   *Neste caso usando o & retorna 1 somente nas casa que tem equivalencia de bit 1

*/
console.log(res)

let res1=n1 | n2
/* 
Em binario

n1=1010 
n2=1011   *Neste caso usando o | retorna 1 independete se ha equivalencia de bit 1

*/
console.log(res1)

let res3=n1 ^ n2
/* 
Em binario

n1=1010 
n2=1011   *Neste caso usando o ^ retorna 1 somente nas casa que nap tem equivalencia de bit 1

*/
console.log(res3)

let res4=n1 << 1
/* 
Em binario

 n1=1010    *Neste caso usando o << desloca o bit pra esquerda e adiciona um 0 no local
 n1=10100    *Dobrando na pratica o valor decimal do binario

*/
console.log(res4)

let res5=n1 >> 1
/* 
Em binario

n1=1010    *Neste caso usando o >> desloca o bit pra esquerda e adiciona um 0 no local
n1=0101    *Dividindo pela metade na pratica o valor decimal do binario

*/
console.log(res5)


