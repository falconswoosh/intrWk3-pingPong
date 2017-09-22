//Business Interface
var exceptionTexts = ["ping","pong","ping-pong"];

//TODO: test for blanks
var transformedOutput = function(input) {
  var exceptionDivisors = [3,5,15];
  for (index=0; index < input.length; index++) {
    if (input % exceptionDivisors[index] == 0) {
      return "Hi";
    } else if (input % exceptionDivisors[index] == 0) {
      return "Hello";
    } else if (input % exceptionDivisors[index] == 0) {
      return "How are you?";
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
