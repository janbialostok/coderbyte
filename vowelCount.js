function VowelCount(str) { 
  var vowels = "aeiou";
  var strArray = str.split("");
  var vowelTally = 0;
  for (var i = 0; i < strArray.length; i++){
  	if (vowels.indexOf(strArray[i].toLowerCase()) != -1){
		vowelTally++;
	}
  }
  
  str = vowelTally;
  // code goes here  
  return str; 
         
}