document.getElementById('validate').onclick=

function calculate(){

  var shoe_size1=document.getElementById('shoe_size').value;
  var year1=document.getElementById('year').value;
  var calculate=[(shoe_size1*2)+5]*50;
  var addcalculate=(calculate-year1)+1766;

if(shoe_size1!=""&&year1!=""&&year1.length==4){
alert("calculation result is : "+addcalculate);
}else{
  alert("enter the data");
}

}
