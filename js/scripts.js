//business logic
var name = ""

function beepFunction(input) {
  numbers = []
  for (i = 0; i <= input; i++) {
    if (i % 3 === 0 && i != 0) {
      numbers.push("<br><em class='smallText'>I'm sorry, Dave. I'm afraid I can't do that.</em>");
    } else if ((i.toString()).includes("1")) {
      numbers.push("<br><em>Boop!</em>");
    } else if ((i.toString()).includes("0")) {
      numbers.push("<br><em>Beep!</em>");
    } else {
      numbers.push("<br>" + i);
    }
  }
  return numbers.join(" ");
};

//user interface logic
$(document).ready(function() {
  $("#enterName").submit(function(event) {
    event.preventDefault();
    var name = $("#nameInput").val();
    $("form#enterName").hide();
    console.log(name);
    $("form#enterNumber").show();
  });

  $("#enterNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    $(".numberOutput").html(beepFunction(numberInput));
    $("div.numberOutput").show();
  });

  $("button#clear").click(function(event) {
    event.preventDefault();
    $("div.numberOutput").hide();
  });
});
