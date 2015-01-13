function ExOh(str) { 
  var strArray = str.split("");
  var strLen = strArray.length;
  var xCount = 0;
  var oCount = 0;
  while (strLen--){
  	if (strArray[strLen].toLowerCase() == "x"){
		xCount++;
	}
	if (strArray[strLen].toLowerCase() == "o"){
		oCount++;
	}
  }
  
  if (xCount === oCount){
  	return true;
  }
  else{
  	return false;
  }

}