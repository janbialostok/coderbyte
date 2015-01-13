function RunLength(str) { 
	var strArray = str.split("");
	var newArray = [];
	var tally = 1;
	
	for (var i = 0; i < strArray.length; i++){
		if (strArray[i] === strArray[i + 1]){
			tally++;
		}
		else{
			newArray.push(tally + strArray[i]);
			tally = 1;
		}
	}
	
	var result = newArray.join("");
  // code goes here  
  return result; 
         
}