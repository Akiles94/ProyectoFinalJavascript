var nuevo="";
var ant=0;
var op="";
var res=0;
var panel=document.getElementById("display");
var teclas=document.getElementsByClassName("tecla");
for(i=0;i<teclas.length;i++){
  teclas[i].addEventListener("click",function(event){
      id=event.target.getAttribute('id');
      alto=event.target.style.width;
      ancho=event.target.style.height;
      event.target.style.width="21%";
      event.target.style.width="50px";
      function cambio(){
                event.target.style.width=alto;
                event.target.style.height=ancho;
        };
            setTimeout (cambio, 100);
      switch(id){
          case "on":
              panel.innerHTML="0";
              ant=0;
              nuevo="";
              break;
          case "mas":
              ant=parseFloat(nuevo);
              nuevo="";
              panel.innerHTML=nuevo;
              op="mas";
              break;
          case "menos":
              ant=parseFloat(nuevo);
              nuevo="";
              panel.innerHTML=nuevo;
              op="menos"; 
              break;
          case "por":
              ant=parseFloat(nuevo);
              nuevo="";
              panel.innerHTML=nuevo;
              op="por";
              break;
          case "dividido":
              ant=parseFloat(nuevo);
              nuevo="";
              panel.innerHTML=nuevo;
              op="dividido";
              break;
          case "igual":
              if(op==="mas"){
                res=ant+parseFloat(nuevo);
              }
              if(op==="menos"){
                  res=ant-parseFloat(nuevo);
              }
              if(op==="por"){
                  res=ant*parseFloat(nuevo);
              }
              if(op==="dividido"){
                  res=ant/parseFloat(nuevo);
              }
              res=res.toString();
              if(res.length>7){
                  res=parseFloat(res);
                  res=res.toExponential(2);
                  panel.innerHTML=res;
              }
              else{
                  panel.innerHTML=res;
              }
              ant=nuevo;
              nuevo=res;
              break;
          case "sign":
              if(panel.innerHTML!=="0"||panel.innerHTML!==""){
                  if(nuevo!==""){
                  nuevo=parseFloat(nuevo);
                  nuevo=-nuevo;
                  panel.innerHTML=nuevo;
                  }
              }
              break;
          case "punto":
              id=".";
              for(i=0;i<nuevo.length;i++){
                  if(nuevo[i]==="."){
                      id="";
                  }
              }
              if(panel.innerHTML!=="0"){
              nuevo=nuevo+id;
              panel.innerHTML=nuevo;}; 
              break;
        default:
            nuevo=nuevo.toString();
            if(nuevo.length<=7){
                if(panel.innerHTML==="0" && id==="0"){}
                else{
                nuevo=nuevo+id;
                panel.innerHTML=nuevo;}
            } 
            break;
      }
  });
};
