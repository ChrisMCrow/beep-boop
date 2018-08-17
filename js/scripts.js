//business logic


//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#numberInput").val();
    $(".numberOutput").text(beepFunction(numberInput) + "<br>");
  });
});
