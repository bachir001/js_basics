var show1 =document.getElementById('show');
var hide1=document.getElementById('hide');
var text1=document.getElementById('texte');

function hide_show(anchor_id) {

switch (anchor_id) {
  case "hide":
    text1.style.display= "none";
    break;

  default:
   text1.style.display= "block";
}

}


show1.addEventListener("click",()=>{hide_show("show")});
hide1.addEventListener("click",()=>{hide_show("hide")});
