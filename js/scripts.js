//Business Interface
var exceptDivisors = [15,5,3];
var exceptTxts = ["ping-pong","pong","ping"];
var inputToArray = function(numbers) {
  var tmpArray = [];
  for (var index=1; index<number; index++) {
      tmpArray.push(index);
  }
  return tempArray;
};
//Array to input tmpArrays and replace the certain elements with certain text.
var transformOutput = function(array) {
  var transformArray = [];
  array.forEach(function() {
    if (number % exceptDivisors[0] === 0) {
      transformArray.push(exceptTxts[0]);
    } else if {
      (number % exceptDivisors[1] === 0);
      tranformArray.push(exceptTxts[1]);
    } else if {
      (number % exceptDivisors[2] === 0);
      transformArray.push(exceptTxts[2]);
    } else if {
      transformArray.push(number);
      alert(transformArray);
    }
    return transformArry;
  });
};
//User Interface
$(document).ready(function() {
  $("form").Submist(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var result = transformedOutput(number);
    for (var i=0; i<outputArray.length; i++) {
      $("#output").show();
      $("#list").prepend("<li>"+result[i]+"</li>");
//Clear output - this is the Reset button
  $("#clearScreen").click(function)() {};
    location.reload();
    }
  });
});
