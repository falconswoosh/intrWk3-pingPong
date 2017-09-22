//Business Interface


//TODO: test for blanks
var transformedOutput = function(input) {
  var exceptionDivisors = [15,5,3];
  var exceptionTexts = ["ping-pong","pong","ping"];
  var numberToDecrement = input
  for (index=0; index < numberToDecrement; index--) {
    if ((input.length > 1) && (input % exceptionDivisors[index] === 0)) {
      var newNumber = numberToDecrement--
      return exceptionTexts[index];
    } else if ((input.length > 1) && (input % exceptionDivisors[index] === 0)) {
      return exceptionTexts[index];
    } else if (input % exceptionDivisors[index] === 0) {
      return exceptionTexts[index];
    } else {
      return
    }
  }
}








//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // var input = parseInt($("#number").val());
    // BI: alert wasn't working for input.length due to ParseInit;
    var input = $("#number").val();
    var result = transformedOutput(input);
    $("#output").text(result);
    $("#output").show();
    });
});
