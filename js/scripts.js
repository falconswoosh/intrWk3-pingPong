//Business Interface
//Global variables
  var exceptionDivisors = [15,5,3];
  var exceptionTexts = ["ping-pong","pong","ping"];
//Accept only positive integers. Return positve integer greater than zero
var positiveInteger = function(number){
  if (number <= 0){
    return "Try again.  Please enter an integer greater than 0."
  }
};
//Create new array from 1 to the user input number.
var tempArray = function(number) {
  for (var i=1; i<=number; i++) {
    tempArray.push(i);
  }
  return tempArray;
//
};
//TODO: test for blanks
// var transformedOutput = function(input) {
//   var exceptionDivisors = [15,5,3];
//   var exceptionTexts = ["ping-pong","pong","ping"];
//   // var numberToDecrement = input;
//
//   for (index=0; index < numberToDecrement; index--) {
//     if ((input.length > 1) && (input % exceptionDivisors[index] === 0)) {
//       var newNumber = numberToDecrement--;
//       alert("input.length: " + input.)
//       alert("newNumber: " + newNumber);
//       return exceptionTexts[index];
//     } else if ((input.length = 1) && (input % exceptionDivisors[index] === 0)) {
//       var newNumber = numberToDecrement--;
//       return exceptionTexts[index];
//     } else if (input % exceptionDivisors[index] === 0) {
//       var newNumber = numberToDecrement--;
//       return exceptionTexts[index];
//     } else {
//       var newNumber = numberToDecrement--;
//       return newNumber;
//     }
//   }
// }





//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    // var result = transformedOutput(input);
    $("#output").text(""); //Clear output section
    $("#output").show();
      for (var i = 0; i < outputArray.length; i++) {
        $("#output").prepend("<li>"+outputArray[i]+"</li>");
      }
    });
});
