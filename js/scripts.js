//Business Interface
var transformedOutput = function(inputSplit) {
  for(index=0; input.length < index; index++)
  return alert(transformedOutput)
}








//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // var inputParseInit = input.parseInit();
    // var inputVal = $("input#number").val();
    var input = parseInt($("#inputnumber").val());
    var result = transformedOutput(input);
    $("#output").text(result);
    $("#output").show();
    });
});
