function ArithGeo(arr) { 
  var arith = true;
  var geo = true;
  var difference = arr[1] - arr[0];
  var quotient = arr[1] / arr[0];
  for (var i = arr.length - 1; i > 1; i--){
  	if ((arr[i] - arr[i - 1]) != difference){
		arith = false;
	}
	if ((arr[i] / arr[i - 1]) != quotient){
		geo = false;
	}
  }
  if (arith && !geo){
  	return "Arithmetic";
  }
  else if (!arith && geo){
  	return "Geometric";
  }
  else{
  	return -1;
  }
         
}