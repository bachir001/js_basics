var green1=document.querySelector('.green');
var red1=document.querySelector('.red');
var blue1=document.querySelector('.blue')
var text1=document.getElementById('text');

function hide_show(anchor_id) {

switch (anchor_id) {
  case "green":
    text1.style.color= "green";
    break;
 case "red":
     text1.style.color= "red";
   break;
   case "blue":
       text1.style.color= "blue";
     break;

  default:
   text1.style.color= "#000000";
}

}


green1.addEventListener("click",()=>{hide_show("green")});
red1.addEventListener("click",()=>{hide_show("red")});
blue1.addEventListener("click",()=>{hide_show("blue")});
