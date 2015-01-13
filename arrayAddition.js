function ArrayAdditionI(arr) { 
  var largestIndex = 0;
  var largestNum = 0;
  var tempIndex = 0;
  for (var i = 0; i < arr.length; i++){
  	
	if (arr[i] > largestNum){
		largestNum = arr[i];
		largestIndex = tempIndex;
	}
    tempIndex++;
  }
  var newArray = arr.splice(largestIndex, 1)
  findValue(newArray, largestNum, 0);    
}

function findValue(arr2, lNum, currentValue){ 
  var currentValue = arr2.shift() + arr2.shift();
  arr2.unshift(currentValue);
  if (currentValue == lNum){
    return true;
  }
  else if (arr2.length == 1 && currentValue != lNum){
    return false;
  }
  else{
    findValue(arr2, lNum, currentValue);
  }
  
}

/*
	var arr = [1,3,2,6];
var largestIndex = 0;
  var largestNum = 0;
  var tempIndex = 0;
  for (var i = 0; i < arr.length; i++){
  	
	if (arr[i] > largestNum){
		largestNum = arr[i];
		largestIndex = tempIndex;
	}
    tempIndex++;
  }
  arr.splice(largestIndex, 1)
  var total = largestNum;
  var sortedArray = arr.sort(function(a,b){return a - b});
  for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        total -= arr[k];
        if (total == largestNum) {
          console.log("true");
        }
      }
    }
console.log(sortedArray);
*/