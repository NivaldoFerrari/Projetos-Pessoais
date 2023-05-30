function fecharDialog(){
    document.getElementById("btn_dialog").innerHTML="Abrir"
    document.getElementById("d1").removeAttribute("open")
}
function abrirDialog(){
    document.getElementById("btn_dialog").innerHTML="Fechar"
    document.getElementById("d1").setAttribute("open","")

}
function abrirFechar(){
    if(document.getElementById("d1").open){
        fecharDialog();
    }else{
        abrirDialog();
    }
}