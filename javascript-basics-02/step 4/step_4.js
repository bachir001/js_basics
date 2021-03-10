

var button1 = document.querySelector('button');

var name1=document.getElementById('name');
var surname1=document.getElementById('surname');
var city1=document.getElementById('city');


button1.addEventListener("click",function changing(){

  if (confirm('Are you sure you want to reset everything?')) {
  // clear it!
  name1.value=""; surname1.value=""; city1.value="";
} else {
  // Do nothing!
  console.log('no reset');
}

});
