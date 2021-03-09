document.getElementById('validate').onclick=

function message(){

  var first_number1=document.getElementById('first_number').value;
  var second_number1=document.getElementById('second_number').value;
  var divid_reminder=first_number1%second_number1;

if(first_number1!=""&&second_number1!=""){
alert(first_number1+" % "+second_number1+" = "+divid_reminder);
}else{
  alert("enter the data");
}

}
