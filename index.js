var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var list = {[item]: itemPrice};
  cart.push(list);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var temp = [];
  for(var i=0; i<cart.length; i++) {
    temp.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`); 
  }
   if(cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    return `In your cart, you have${temp}.`
  }
}

function total() {
  var singlePrice;
  var total = 0;
  for(var i=0; i<cart.length; i++){
    singlePrice = parseInt(Object.values(cart[i]));
    total += singlePrice;
  }
  return total;
}

function removeFromCart(item) {
  for(var i=cart.length-1; i>=0; i--) {
    var foo = Object.keys(cart[i]).toString();
    console.log("FOO IS " + foo);
    if(item === foo) {
      cart.splice(cart[i]);
      break;
    }
  }
  return "That item is not in your cart.";
} 


function placeOrder(cardNumber) {
  if(cardNumber.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    return `Your total is XXX` 
  }
}

