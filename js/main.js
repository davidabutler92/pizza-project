//UI logic 
$(document).ready(function() {
  $("#order-now").click(event => {
    event.preventDefault();
    $("#customize-pizza-form").show();
  });

  $("#place-order-button").click(event => {
    event.preventDefault();
    console.log('CLICK ME');
  });
});