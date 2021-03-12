document.getElementById('validate').onclick=

function age(){

  var age=document.getElementById('age').value;

   if(age!=""&&age.length<=3&&age>18&&age<=200){
     alert("you are over 18");
   }else if(age>200 ||age<5){
        alert("are you joking me!");
      }else {
          alert("you are under 18");
      }

}
