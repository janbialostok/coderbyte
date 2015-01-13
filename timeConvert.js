function TimeConvert(num) { 
  var hours = 0;
  /*for (i = num; i >= 60; i -= 60){
  	hours++;
  }*/
  var minutes = num;
  while (minutes >= 60){
    minutes -= 60;
    hours++;
  }
  //num = hours + ":" + i;
  num = hours + ":" + minutes;
  return num; 
         
} 