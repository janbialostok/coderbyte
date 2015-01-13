function LetterCountI(str) { 
  var strArray = str.split(" ");
  var wordArray = [];
  var letterTally = 0;
  var wordIndex;
  for (var i = 0; i < strArray.length; i++){
  	wordArray = strArray[i].split("");
	for (var x = 0; x < wordArray.length; x++){
		var theLetter = wordArray[x].toLowerCase();
		var tempTally = 0;
		for (var y = 0; y < wordArray.length; y++){
			if (y != x){
				if (theLetter == wordArray[y].toLowerCase()){
					tempTally++;
				}
			}
		}
		if (tempTally > letterTally){
			letterTally = tempTally;
			wordIndex = i;
		}
	}
  }
  if (typeof wordIndex === "undefined"){
    return -1;
  }
  // code goes here  
  return strArray[wordIndex]; 
         
}