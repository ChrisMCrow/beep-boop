//business logic
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
  $("form").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    $(".numberOutput").html(beepFunction(numberInput));
  });
});
