const dv1=document.getElementById("div1")
const dv2=document.getElementById("div2")
const dv3=document.getElementById("div3")
const dv4=document.getElementById("div4")

console.log(dv1)
console.log(dv1.id)
console.log(dv1.innerHTML)

dv1.innerHTML="Ferrari"//auterando o conteudo do elemento

const arraydiv=[dv1,dv2,dv3,dv4]

const colecaoHtml=document.getElementsByTagName("div")// cria um HtmlCollection
const colecao2Html=[...document.getElementsByTagName("div")]// tranformando em Array
let colecao3Html=[document.getElementsByTagName("div")]
colecao3Html=[...colecao3Html]// tranformando em Array

console.log(arraydiv)
console.log(colecaoHtml)
console.log(colecao2Html)
console.log(colecao3Html)