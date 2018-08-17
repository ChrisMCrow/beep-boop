//business logic
function beepFunction(input) {
  if (input === "3") {
    return "<em>I'm sorry, Dave. I'm afraid I can't do that.</em>"
  } else if (input.includes("1")) {
    return "<em>Boop!</em>";
  } else if (input.includes("0")) {
    return "<em>Beep!</em>";
  } else {
    number = parseInt(input)
    console.log("else " + number)
    return number;
  }
};

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#numberInput").val();
    $(".numberOutput").html(beepFunction(numberInput) + "<br>");
  });
});
