

document.getElementById('validate').onclick=

function message(){

  var name1=document.getElementById('name').value;
  var surname1=document.getElementById('surname').value;
  var city1=document.getElementById('city').value;
if(name1!=""&&surname1!=""&&city1!=""){
alert("hello "+name1+" "+surname1+"\n"+"from : "+city1);
}else{
  alert("enter the data");
}
}
