document.getElementById('validate').onclick=

function message(){

  var first_number1=document.getElementById('first_number').value;
  var second_number1=document.getElementById('second_number').value;

if(first_number1!=""&&second_number1!=""){
alert(first_number1+" * "+second_number1+" = "+second_number1*first_number1);
}else{
  alert("enter the data");
}
}
