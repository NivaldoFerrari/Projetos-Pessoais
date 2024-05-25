const todasdivs=[...document.getElementsByTagName("div")]//getElementsByClassName somente pelo nome da tag
const todos=[...document.getElementsByClassName("curso")]// getElementsByClassName retorna um HTMLCollection com o ... tranfomamos em um array
const c1=[...document.getElementsByClassName("c1")]//getElementsByClassName somente pelo nome da tag
const c2=[...document.getElementsByClassName("c2")]//getElementsByClassName somente pelo nome da tag
const especial=document.getElementById("c1")//getElementById somente retona por id

console.log(todasdivs)
console.log(todos)
console.log(c1)
console.log(c2)
console.log(especial)

//Como funciona o querySelector
//Muito mais dinamico pode ser usado pra obter todos elementos acima
const query_divs=document.querySelector("div")//Retona o primeiro elemento div
console.log(query_divs)

const query_divs2=[...document.querySelectorAll("div")]//Retona todos os elementos div em um array por causa do ...

console.log(query_divs2)

const query_cursos=[...document.querySelectorAll(".curso")]//Retona todos os elementos com a classe .curso

console.log(query_cursos)

const queryc1=[...document.querySelectorAll(".c1")]
const queryc2=[...document.querySelectorAll(".c2")]

console.log(queryc1)
console.log(queryc2)

const query_divsp=document.querySelectorAll("div,p")//pode retornar elementos de tags diferentes ao mesmo tempo
console.log(query_divsp)

const query_divsE=document.querySelectorAll("div[class]")//retona apenas as divs com o atributo class
console.log(query_divsE)

const query_divsDentroP=document.querySelectorAll("div > p")//retona apenas elementos p dentro de divs
console.log(query_divsDentroP)