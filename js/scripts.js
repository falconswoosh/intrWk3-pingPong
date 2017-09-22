//Business Interface
//Global variables
  var exceptionDivisors = [15,5,3];
  var exceptionTexts = ["ping-pong","pong","ping"];
//Accept only positive integers. Return positve integer greater than zero
var positiveInteger = function(number) {
  if (number <= 0) {
    return "Try again.  Please enter an integer greater than 0."
  }
};
// //Create new array from 1 to the user input number.
// var outputArray = function(number) {
//   for (var index=1; index<=number; index++) {
//     outputArray.push(index);
//   }
//   return outputArray;
// //
// };
//TODO: test for blanks
var transformedOutput = function(input) {
  var exceptionDivisors = [15,5,3];
  var exceptionTexts = ["ping-pong","pong","ping"];
  var temp = []
  var number = input;

  for (index=0; index < number; index--) {
    if ((input.length > 1) && (input % exceptionDivisors[index] === 0)) {
      var newNumber = number--;
      return exceptionTexts[index];
    // } else if ((input.length = 1) && (input % exceptionDivisors[index] === 0)) {
    //   var newNumber = numberToDecrement--;
    //   return exceptionTexts[index];
    // } else if (input % exceptionDivisors[index] === 0) {
    //   var newNumber = numberToDecrement--;
    //   return exceptionTexts[index];
    // } else {
    //   var newNumber = numberToDecrement--;
      // return newNumber;
    }
  }
}





//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var result = transformedOutput(number);
    // $("#output").text(""); //Clear output section
    $("#output").show();
    $("#output").prepend("<li>"+result+"</li>");
    });
});
