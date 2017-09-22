//Business Interface









//User Interface
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("input#number").val();
    var result = transformedOutput(input);
    $("#output").text(result);
    $("#output").show();
    });
});
