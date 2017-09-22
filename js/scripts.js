//Business Interface
var exceptionDivisors = [3,5,15];
var exceptionTexts = ["ping","pong","ping-pong"];

//TODO: test for blanks
var transformedOutput = function(input) {
  for (index=0; index < input.length; index++) {
    if (input % 3 > 0 || input % 5 > 0 || input % 15 > 0) {
      alert("Not a ping, pong, or ping-pong");
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
