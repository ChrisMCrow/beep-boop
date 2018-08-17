//business logic
function beepFunction(input) {
  numbers = []
  for (input; input >= 0; input--) {
    if (input % 3 === 0 && input != 0) {
      console.log("input % 3")
      numbers.push("<br><em>I'm sorry, Dave. I'm afraid I can't do that.</em>");
    } else if ((input.toString()).includes("1")) {
      console.log("includes 1")
      numbers.push("<br><em>Boop!</em>");
    } else if ((input.toString()).includes("0")) {
      console.log("includes 0")
      numbers.push("<br><em>Beep!</em>");
    } else {
      console.log("number: " + input);
      numbers.push("<br>" + input);
    }
  }
  return numbers.join(" ");
};

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    $(".numberOutput").html(beepFunction(numberInput) + "<br>");
  });
});
