//business logic
var name = "Dave"

function beepFunction(input) {
  numbers = []
  for (i = 0; i <= input; i++) {
    if (i % 3 === 0 && i != 0) {
      numbers.push("<br> <em class='smallText'>I'm sorry, " + name + ". I'm afraid I can't do that.</em>");
    } else if ((i.toString()).includes("1")) {
      numbers.push("<br> <em>Boop!</em>");
    } else if ((i.toString()).includes("0")) {
      numbers.push("<br> <em>Beep!</em>");
    } else {
      numbers.push("<br> " + i);
    }
  }
  return numbers.join(" ");
};

//user interface logic
$(document).ready(function() {
  $("#enterName").submit(function(event) {
    event.preventDefault();
    name = $("#nameInput").val();
    $("form#enterName").slideUp();
    $("form#enterNumber").show();
  });

  $("#enterNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    var numberOutput = beepFunction(numberInput);
    $(".numberOutput").html(numberOutput + "<br>");
    $("div.numberOutput").slideDown();
  });

  $("#reverse").click(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    var numberOutputArray = beepFunction(numberInput).split("<br>");
    var reverseArray = numberOutputArray.reverse();
    var reverseOuput = reverseArray.join("<br>");
    $(".numberOutput").html("<br>" + reverseOuput);
    $("div.numberOutput").slideDown();
  });

  $("button#clear").click(function(event) {
    event.preventDefault();
    $("div.numberOutput").slideUp();
  });
});
