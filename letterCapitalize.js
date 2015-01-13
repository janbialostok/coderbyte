function LetterCapitalize(str) { 
    var wordArr = str.split(" ");
	var newString = [];
	for (var i = 0; i < wordArr.length; i++){
		var tempArr = wordArr[i].split("");
		var tempWordArr = [];
      for (var x = 0; x < tempArr.length; x++){
        if (x == 0){
          tempWordArr.push(tempArr[x].toUpperCase());
        }
        else{
          tempWordArr.push(tempArr[x]);
        }
      }
		newString.push(tempWordArr.join(""));
	}
	
  str = newString.join(" ");  
  return str; 
         
}