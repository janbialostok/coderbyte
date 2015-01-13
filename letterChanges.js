function LetterChanges(str) { 
  var wordArr = str.split("");
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var vowel = "aeiou";
  var newString = [];
  // code goes here  
	for (var x = 0; x < wordArr.length; x++){
        if (alpha.indexOf(wordArr[x].toLowerCase()) != -1){
            var letterIndex = wordArr[x].charCodeAt(0) + 1;
			var newLetter = String.fromCharCode(letterIndex);
			if (vowel.indexOf(newLetter) != -1){
				newString.push(newLetter.toUpperCase());
			}
			else{
				newString.push(newLetter);
			}
		}
      else{
        newString.push(wordArr[x]);
      }
	}
  str = newString.join("");
  return str; 
         
}