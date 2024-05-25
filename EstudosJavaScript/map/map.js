let divs = document.getElementsByTagName("div")

divs=[...divs]// tranformando em uma coleção iteravel

divs.map((elementos,indice)=>{
    console.log(elementos.innerHTML)
})
