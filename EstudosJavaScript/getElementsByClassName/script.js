const todos=[...document.getElementsByClassName("curso")]// getElementsByClassName retorna um HTMLCollection com o ... tranfomamos em um array
const c1=[...document.getElementsByClassName("c1")]
const c2=[...document.getElementsByClassName("c2")]

console.log(todos)
console.log(c1)
console.log(c2)

todos.map((elementos)=>{//usando o map para adicionar mais uma classe
    elementos.classList.add("destaque")
})