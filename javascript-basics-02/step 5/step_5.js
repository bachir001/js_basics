var img1 = document.querySelector('#image1');
var img2 = document.querySelector('#image2');
var img3 = document.querySelector('#image3');
var img4 = document.querySelector('#image4');
var img5 = document.querySelector('#image5');



function changing(){


img1.addEventListener("mouseover",function chang(){img1.src="images/image1_2.jpg";});
img2.addEventListener("mouseover",function chang(){img2.src="images/image2_2.jpg";});
img3.addEventListener("mouseover",function chang(){img3.src="images/image3_2.jpg";});
img4.addEventListener("mouseover",function chang(){img4.src="images/image4_2.jpg";});
img5.addEventListener("mouseover",function chang(){img5.src="images/image5_2.jpg";});


}

addEventListener("mouseover", changing());
