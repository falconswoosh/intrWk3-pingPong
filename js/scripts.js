//Business Interface
var exceptionDivisors = [3,5,15];
var exceptionTexts = ["ping","pong","ping-pong"];
var transformedOutput = function(input) {
  for(index=0; input.length < index; index++);
  return alert(transformedOutput);
}








//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // var inputParseInit = input.parseInit();
    // var inputVal = $("input#number").val();
    var input = parseInt($("#number").val());
    var result = transformedOutput(input);
    $("#output").text(result);
    $("#output").show();
    });
});
