function Palindrome(str) { 
  var strArray = str.split("");
  var reverseArr = [];
  for (var i = strArray.length - 1; i >= 0; i--){
    if (strArray[i] !== ""){
      reverseArr.push(strArray[i]);
    }
  }
  var reverse = reverseArr.join("").split(" ").join("");
  var str = strArray.join("").split(" ").join("");
  
  if (str === reverse){
      return true;
  }
  else{
      return false;
  }
         
}