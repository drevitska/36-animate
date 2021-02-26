const carts = ['6','7','8','9','10','J','D', 'K', 'T'];
const suits = ['&#9824', '&#9827', '&#9829', '&#9830']
const table = document.getElementById('table');

for (let index = 0; index < suits.length; index++) {
  const suit = suits[index];
  for (let yndex = 0; yndex < carts.length; yndex++) {
    const cart = carts[yndex];
    table.innerHTML += createCarts(cart, suit)
  }
}


function createCarts(cart, suit) {
  let color = 'black';
  if (suit == '&#9829' || suit == '&#9830') {
    color = 'red';
  } else {
    color = 'black';
  }
  let newcart = `<div class="cart-wrap">
          <div class="cart-face"></div>
          <div class="cart-backface ${color}">${cart} ${suit};</div>
        </div>`
  return newcart;

}