var img1 = document.querySelector('#image1');
var img2 = document.querySelector('#image2');
var img3 = document.querySelector('#image3');
var img4 = document.querySelector('#image4');
var img5 = document.querySelector('#image5');


function changimg(img_name){


switch (img_name) {
  case "img2":
   img2.src="images/image2_2.jpg";
    break;

  case "img3":
   img3.src="images/image3_2.jpg";
     break;

  case "img4":
  img4.src="images/image4_2.jpg";
     break;

  case "img5":
   img5.src="images/image5_2.jpg";
      break;

  default:
   img1.src="images/image1_2.jpg";

}

}

function comeback(imgname){
  if (imgname=="img1") {
    img1.src="images/image1.jpg";
  }
}

  img1.addEventListener("mouseover",()=>{changimg("img1")});
  img1.addEventListener("mouseout",()=>{comeback("img1")});
  img2.addEventListener("mouseover",()=>{changimg("img2")});
  img3.addEventListener("mouseover",()=>{changimg("img3")});
  img4.addEventListener("mouseover",()=>{changimg("img4")});
  img5.addEventListener("mouseover",()=>{changimg("img5")});
