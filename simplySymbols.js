function SimpleSymbols(str) { 
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var strArray = str.split("");
  var trueFalse = true;
  for (var i = 0; i < strArray.length; i++){
  	if (alpha.indexOf(strArray[i]) != -1){
		if ((strArray[i + 1] != "+") || (strArray[i - 1] != "+")){
			trueFalse = false;
		}
	}
  }
  return trueFalse; 
         
}