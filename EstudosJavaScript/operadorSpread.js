const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[5,4,1]

console.log(soma(valores))
//Operador spread ...
console.log(soma(...valores))

let valores2=[5,4,1,10,15]

console.log(soma(...valores2))//mesmo se tiver mais elementos

// spread ... on object

const player1={name:"Nivaldo",life:100,damage:76,wind:true}
const player2={name:"Ferrari",life:130,energy:55,fire:true}
const player3={...player1,...player2}//concatena os obj

console.log(player3)