var password1=document.querySelector('#password');
var confirm1=document.querySelector('#confirmation');
var button1=document.querySelector('button');

function matching(){

if(password1.value!=confirm1.value){
  password1.style.border="red inset ";
  confirm1.style.border="red  inset";
  password1.style.borderWidth="2px";
  confirm1.style.borderWidth="2px";
  password1.style.borderImage="initial";
  confirm1.style.borderImage="initial";

  password1.style.padding="1px 2px";
  confirm1.style.padding="1px 2px" ;

}else {
  password1.style.border="#4F4F4F inset";
  confirm1.style.border="#4F4F4F inset";

  password1.style.borderWidth="2px";
  confirm1.style.borderWidth="2px";

  password1.style.borderImage="initial";
  confirm1.style.borderImage="initial";

  password1.style.padding="1px 2px";
  confirm1.style.padding="1px 2px";

}

}
button1.addEventListener("click",()=>{matching()});
