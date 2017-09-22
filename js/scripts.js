//Business Interface
var translateToASCII = function(inputSplit) {
  for(index=0; input.length < index; index++)
}








//User Interface
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = parseInit($("input#number").val());
    var inputSplit = input.split("");
//    var input = parseInt($('#inputnumber').val());
    var result = transformedOutput(input);
    $("#output").text(result);
    $("#output").show();
    });
});
