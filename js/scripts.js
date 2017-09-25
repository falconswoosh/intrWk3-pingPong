//Business Interface
var validNumberCheck = function(number) {
  if (number > 0) {
    return
  } else {
    return "Please enter a number greater than 0.";
  }
}
var makeInputArray = function(number) {
  var exceptDivisors = [15,5,3];
  var exceptTxts = ["ping-pong","pong","ping"];
  var arrayOfNumbers=[];
  var transformArray = [];
    for (var index=1; index<=number; index++) {
    arrayOfNumbers.push(index);
  };
    arrayOfNumbers.forEach(function(number) {
      if (number % exceptDivisors[0] === 0) {
        transformArray.push(exceptTxts[0]);
      } else if (number % exceptDivisors[1] === 0) {
        transformArray.push(exceptTxts[1]);
      } else if (number % exceptDivisors[2] === 0) {
        transformArray.push(exceptTxts[2]);
      } else {
        transformArray.push(number);
      }
      return transformArray;
    });
    return transformArray;
};

//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = (parseInt($("input#number").val()));

    var outputArray = makeInputArray(number);
		for (var index=0; index<outputArray.length;index++) {
      $("div#output").show();
  		$("ul#list").append("<li>"+outputArray[index]+"</li>");
    }
//Diplay 'error' only if number is <= 0 or a whole number
    $(".help-inline").text(validNumberCheck(number));
    $(".help-inline").css("background-color", "cyan");

//Clear output - this is the Reset button
    $("button#clearScreen").click(function() {
      location.reload();
    });
  });
});
