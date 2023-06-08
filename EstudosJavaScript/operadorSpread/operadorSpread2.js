//So funciona no Browser
const objs1=document.getElementsByTagName("div")//HTMLCollection
const objs2=[...document.getElementsByTagName("div")]//Array

console.log(objs1)//HTMLCollection
console.log(objs2)//Array


objs2.forEach(element => {
    console.log(element)
});

objs2.forEach(element => {
    element.innerHTML="True"
});
/* 
objs1.forEach(element => {
    console.log(element)
}); */