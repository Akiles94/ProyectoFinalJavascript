/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panel=document.getElementById("panel");
var nuevo="";
var a=0;
var op=""; 
var boton="";

function numeros(id){
    if(id==="."){
        for(i=0;i<nuevo.length;i++){
            if(nuevo[i]==="."){
               id="";
            }
        }
    }
    if(nuevo.length<=7){
        nuevo=nuevo+id;
        panel.innerHTML=nuevo;   
    }
};
function operaciones(id){
    if(a===""||nuevo===""){
        if(id==="resta"){
            nuevo="-";
            panel.innerHTML="-";
        }
    }
    else{
        a=parseFloat(nuevo);
        nuevo="";
        panel.innerHTML=nuevo;
        op=id;
    }
}
function igual(){
    if(op==="suma"){
        var res=a+(parseFloat(nuevo));
    }
    if(op==="resta"){
        var res=a-(parseFloat(nuevo));
    }
    if(op==="multiplicacion"){
        var res=a*(parseFloat(nuevo));
    }
    if(op==="division"){
        var res=a/(parseFloat(nuevo));
    }
    res=res.toString();
    if(res.length>7){
        res=parseFloat(res);
        res=res.toFixed(4);
        panel.innerHTML=res;
    }
    else{
        panel.innerHTML=res;
    }
}
function borrar(){
    a=0;
    nuevo="";
    panel.innerHTML="0";
}
function signo(){
    if(panel.innerHTML!=="0"||panel.innerHTML!==""){
        if(nuevo!==""){
            nuevo=parseFloat(nuevo);
            nuevo=-nuevo;
            panel.innerHTML=nuevo;
        }
    }
}