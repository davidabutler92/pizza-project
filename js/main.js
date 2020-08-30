const Pizza = function(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 8;
  this.pricePerTopping = 1;
}

function findToppings(checkboxNodes) {
  const toppings = [];
  for(let i = 0; i <checkboxNodes.length; i++) {
    const value = checkboxNodes[i].value;
    const checked = checkboxNodes[i].checked;
    if(checked) {
      toppings.push(value);
    }
  }
  return toppings;
}

Pizza.prototype.addPrice = function() {
  if(this.size === "medium") {
    this.price =+2;
  } else if (this.size === "large") {
    this.price =+ 4;
  }
}

//UI logic 
$(document).ready(function() {
  $("#order-now").click(event => {
    event.preventDefault();
    $("#customize-pizza-form").show();
    $("#title-container").hide();
    $("form#start-order").hide();
  });

  $("#place-order-button").click(event => {
    event.preventDefault();
    $("#customize-pizza-form").hide();
    
    const size = $("#pizza-size").val();
    const sauce = $("#pizza-sauce").val();
    const checkboxNodes = $("#checkbox-wrapper").children("input");
    const toppings = findToppings(checkboxNodes);
    
    const newPizza = new Pizza(size, sauce, toppings);
    
  });
});