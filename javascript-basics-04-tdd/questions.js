
const stringSize = (text) => {
return text.length;
}

const replaceCharacterE = (text) => {
return text.replace("e", " ");}

const concatString = (text1, text2) => {
return text1.toString()+text2.toString();
}

const showChar5 = (text) => {
 return text.charAt(4);
}
const showChar9 = (text) => {
  return text.charAt(0)+text.charAt(1)+text.charAt(2)+text.charAt(3)+text.charAt(4)+text.charAt(5)+text.charAt(6)+text.charAt(7)+text.charAt(8);

}
const toCapitals = (text) => {
return text.toUpperCase();
}
const toLowerCase = (text) => {
return text.toLowerCase();
}
const removeSpaces = (text) => {
return text.trim();
}
const IsString = (text) => {
if (typeof text === 'string') {
  return true;
}else {
  return false;
}

}

const getExtension = (text) => {
return text.substring(text.length-3,text.length);
}
const countSpaces = (text) => {
  return text.split(" ").length-1;
}
const InverseString = (text) => {
  var put_them_in_array=  text.split("");
  var reverse_the_array= put_them_in_array.reverse();
  var make_the_arry_string=reverse_the_array.join("");
  return make_the_arry_string;
}

const power = (x, y) => {

var pow=Math.pow(x, y);
return pow;

}
const absoluteValue = (num) => {
return Math.abs(num);
}

const absoluteValueArray = (array) => {

for (var i = 0; i < array.length; i++) {
  array[i]=Math.abs(array[i]);
}

return array;
}

const circleSurface = (radius) => {


var area=  Math.PI*Math.pow(radius,2);
var rounding= Math.round(area);
return rounding;

}

const hypothenuse = (ab, ac) => {
return Math.hypot(ab,ac);
}
const BMI = (weight, height) => {
  var bmi= (weight)/(height*height);
  var rounding= Math.round((bmi + Number.EPSILON) * 100) / 100;
  return rounding;
}

const createLanguagesArray = () => {

var language = ["Html","CSS","Java","PHP"];
return language;

}

const createNumbersArray = () => {

  var numbers = [0,1,2,3,4,5];
  return numbers;

}

const replaceElement = (languages) => {

    languages[2]="Javascript";
return  languages;
}

const addElement = (languages) => {
      languages.push("Ruby");
      languages.push("Python");
return languages;
}

const addNumberElement = (numbers) => {
numbers.unshift(-1);
numbers.unshift(-2);
return numbers;
}

const removeFirst = (languages) => {
languages.shift();
return languages;
}

const removeLast = (languages) => {
languages.pop();
return languages;
}

const convertStrToArr = (social_arr) => {

 var ar = social_arr.split(',');
 return ar;
}

const convertArrToStr = (languages) => {
  var ar = languages.join(',');
  return ar;
}

const sortArr = (social_arr) => {
return social_arr.sort();
}

const invertArr = (social_arr) => {
return social_arr.reverse();
}
