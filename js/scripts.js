//Business Interface
var exceptDivisors = [15,5,3];
var exceptTxts = ["ping-pong","pong","ping"];
var arrayOfNumbers=[];
var transformArray = [];

// Array to store input number decrementing to 1
var makeInputArray=function(number) {
  for (var index=1; index<=number; index++) {
    arrayOfNumbers.push(index);
  };
  console.log("End of 1st array");
  console.log(arrayOfNumbers);
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

// Array to input arrayOfNumberss and replace those defined as exceptions with certain text.
//Another solution
// var tranformOutput = arrayOfNumbers.map(function(number) {
// var transformArray=[];
// console.log("Start of 2nd Array");
//   if (number % exceptDivisors[0] === 0) {
//     transformArray.push(exceptTxts[0]);
//     console.log("main if");
//     return transformArray;
//   } else if (number % exceptDivisors[1] === 0) {
//     transformArray.push(exceptTxts[1]);
//     console.log("else if#1");
//       return transformArray;
//   } else if (number % exceptDivisors[2] === 0) {
//     transformArray.push(exceptTxts[2]);
//     console.log("else if#2");
//     return transformArray;
//   } else {
//     transformArray.push(number);
//     console.log("else if#3");
//     return transformArray;
//   }
//   console.log("End of 2nd array");
// console.log(transformArray);
// });

//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#list").text("");
    var number = (parseInt($("input#number").val()));
    var outputArray = makeInputArray(number);

		for (var index=0; index<outputArray.length;index++) {
      $("div#output").show();
  		$("ul#list").append("<li>"+outputArray[index]+"</li>");
    }
//Clear output - this is the Reset button
    $("#clearScreen").click(function() {
      location.reload();
    });
  });
});
