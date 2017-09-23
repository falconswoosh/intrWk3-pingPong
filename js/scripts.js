//Business Interface

var transformedOutput = function(number) {
  var exceptDivisors = [15,5,3];
  var exceptTxts = ["ping-pong","pong","ping"];
  var exceptIndex = 0;
  var outputArray = [];
alert("start")
alert(number)
  for (index=number; index < number; index--) {
    if ((number.length > 1) && (number % exceptDivisors[exceptIndex] === 0)) {
        outputArray.push(exceptTxts[exceptIndex]);
        exceptIndex = exceptIndex++
        alert("Logic1 this is the outputArray: " + outputArray + "eIndex: " + exceptIndex);
        alert("Txt: " + exceptTxts[exceptIndex]);
        // return exceptTxts[exceptIndex]; //temporary test
      } else if (number % exceptDivisors[exceptIndex] === 0) {
        outputArray.push(exceptTxts[exceptIndex]);
        exceptIndex = exceptIndex++
        alert("Logic2 this is the outputArray: " + outputArray + "eIndex: " + exceptIndex);
        alert("Txt: " + exceptTxts[exceptIndex]);
        // return exceptTxts[exceptIndex]; //temporary test
      // } else if (input % exceptDivisors[index] === 0) {
      //   var newNumber = numberToDecrement--;
      //   return exceptTxts[index];
      // } else {
      //   var newNumber = numberToDecrement--;
        // return newNumber;
alert("end");
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
    $("#list").prepend("<li>"+result+"</li>");

    });
});
