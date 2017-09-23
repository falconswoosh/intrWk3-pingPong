//Business Interface
var exceptDivisors = [15,5,3];
var exceptTxts = ["ping-pong","pong","ping"];
var exceptIndex = 0;
// var newNumber = number;
var outputArray = [];
var transformedOutput = function(number) {
  // var exceptDivisors = [15,5,3];
  // var exceptTxts = ["ping-pong","pong","ping"];
  // var exceptIndex = 0;
  var newNumber = number;
  // var outputArray = [];
// alert("start");
// alert("Input number is: " + number);
// alert("number length: " + number.length);
  for (var index=0; index < number; index++) {
    if ((number.length >= 2) && (exceptIndex < 3) && (newNumber != 0) && (number % exceptDivisors[exceptIndex] === 0)) {
        alert("Logic1");
        outputArray.push(exceptTxts[exceptIndex]);
        exceptIndex = exceptIndex++;
        newNumber = newNumber--;
        alert("Logic1 this is the outputArray: " + outputArray + " eIndex: " + exceptIndex);
        alert("Txt: " + exceptTxts[exceptIndex]);
        // return exceptTxts[exceptIndex]; //temporary test
      } else if ((number.length <= 1) && (exceptIndex < 3) && (newNumber > 0) && (number % exceptDivisors[exceptIndex] === 0)) {
        outputArray.push(exceptTxts[exceptIndex]);
        exceptIndex = exceptIndex++;
        newNumber = newNumber--;
        alert("Logic2 this is the outputArray: " + outputArray + " eIndex: " + exceptIndex);
        alert("Txt: " + exceptTxts[exceptIndex]);
      } else if ((exceptIndex < 3) && newNumber > 0) {
        outputArray.push(newNumber);
        exceptIndex = 0;
        newNumber = newNumber--;
      } else {
        alert("Logic2 this is the outputArray: " + outputArray + " eIndex: " + exceptIndex);
        return outputArray;
alert("end");
    }
  }
}








//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var result = transformedOutput(number);
    var cloneArray = outputArray.slice();
    // $("#output").text(""); //Clear output section
		for (var i=0; i<cloneArray.length;i++) {
      $("#output").show();
  		$("#list").prepend("<li>"+cloneArray[i]+"</li>");
    }
  });
});
