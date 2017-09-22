//Business Interface
var exceptionDivisors = [3,5,15];
var exceptionTexts = ["ping","pong","ping-pong"];

//TODO: test for blanks
var transformedOutput = function(input) {
  for (index=0; input.length < index; index++);
    if (input===17) {
      return alert(input.length);
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
