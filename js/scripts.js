//Business Interface


//TODO: test for blanks
var transformedOutput = function(input) {
  var exceptionDivisors = [3,5,15];
  var exceptionTexts = ["ping","pong","ping-pong"];
  for (index=0; index < input.length; index++) {
    if (input % exceptionDivisors[index] === 0) {
      return exceptionTexts[index];
    } else if ((input.length > 1) && (input % exceptionDivisors[index] === 0)) {
      return exceptionTexts[index];
    } else if (input % exceptionDivisors[index] === 0) {
      return exceptionTexts[index];
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
