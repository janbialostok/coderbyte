function SecondGreatLow(arr) { 
  var sortedArr = arr.sort(function(a,b){ return a - b; });
  var mostIndex = 0;
  var leastIndex = sortedArr.length - 1;
	  do{
		mostIndex++;
	  }
	  while (sortedArr[0] == sortedArr[mostIndex]);
	  do{
	  	leastIndex--
	  }
	  while (sortedArr[sortedArr.length - 1] == sortedArr[leastIndex]);
  
  return sortedArr[mostIndex] + " " + sortedArr[leastIndex];
  
}