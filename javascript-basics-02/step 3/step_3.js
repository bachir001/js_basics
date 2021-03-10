

var name1 = document.querySelector('#name');

var divinput_text=document.querySelector('#newtext');


name1.addEventListener("change",function changing(){divinput_text.innerHTML=name1.value});
