const dv1=document.getElementById("div1")
const dv2=document.getElementById("div2")
const dv3=document.getElementById("div3")
const dv4=document.getElementById("div4")

console.log(dv1)
console.log(dv1.id)
console.log(dv1.innerHTML)

dv1.innerHTML="Ferrari"//auterando o conteudo do elemento

const arraydiv=[dv1,dv2,dv3,dv4]

console.log(arraydiv)

arraydiv.map((e)=>{
    console.log(e)
    e.innerHTML="Ferrari"
})