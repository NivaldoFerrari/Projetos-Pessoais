function writer(parametro){
   let  standard = document.getElementById('display').innerHTML;

   document.getElementById('display').innerHTML = standard + parametro;
   
}

function clener(){
    document.getElementById('display').innerHTML ="";

}

function deleter(){
   let delete1 = document.getElementById('display').innerHTML;

   document.getElementById('display').innerHTML = delete1.substring(0, delete1.length -1);

}

function calculater(){
    let account = document.getElementById('display').innerHTML;

    if(account){
    
        document.getElementById('display').innerHTML = eval(account);
        
    }
}