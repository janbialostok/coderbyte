function ABCheck(str) { 
  
  trueFalse = false;
  str = str.split("").join("").split(" ");
  for (var i = 0; i < (str.length - 2); i++){
  	if (str[i].toLowerCase() == "a" || str[i].toLowerCase() == "b"){
		if ((str[i].toLowerCase() == "a" && str[i + 3].toLowerCase() == "b")||(str[i].toLowerCase() == "b" && str[i + 3].toLowerCase() == "a")){
		trueFalse = true;	
		}
	}
  }
  return trueFalse; 
         
}