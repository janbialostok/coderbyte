function LongestWord(sen) { 
  
  var arr = sen.split(" ");
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var letterTally = 0;
  var wordSpot = 0;
  for (var i = 0; i < arr.length; i++){
  	var temp = arr[i].split("");
	var tempTally = 0;
	for (var x = 0; x < temp.length; x++){
		if (alpha.indexOf(temp[x]) === -1){
			tempTally++;
		}
	}
	if (letterTally < (arr[i].length - tempTally)){
		letterTally = (arr[i].length - tempTally);
		wordSpot = i;
	}
  }
  
  sen = arr[wordSpot];
  return sen; 
         
}