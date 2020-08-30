const Pizza = function(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 8;
  this.pricePerTopping = 1;
}
//UI logic 
$(document).ready(function() {
  $("#order-now").click(event => {
    event.preventDefault();
    $("#customize-pizza-form").show();
  });

  $("#place-order-button").click(event => {
    event.preventDefault();
    
    const size = $("#pizza-size").val();
    const sauce = $("#pizza-sauce").val();
    const checkboxNodes = $("#checkbox-wrapper").children("input");
    
    const newPizza = new Pizza(size, sauce, toppings);
    console.log(newPizza);
  });
});