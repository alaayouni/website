// Execute when the page is fully loaded
window.onload = () => {
    displayCartItems();
    updateTotalPrice();
};

// Function to display items in the cart
function displayCartItems() {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.picture}" alt="${item.name}" class="cart-item-image small-image">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">${item.price}</span>
            <div class="quantity-controls">
                <button class="quantity-button" onclick="changeQuantity(${index}, -1)">-</button>
                <span class="quantity-display">${item.quantity || 1}</span>
                <button class="quantity-button" onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Entfernen</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Function to update the total price displayed in the cart
function updateTotalPrice() {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const totalPrice = cartItems.reduce((total, item) =>
        total + parseFloat(item.price.replace('€', '').replace(',', '.')) * (item.quantity || 1), 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2).replace('.', ',') + ' €';
}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateTotalPrice();
}

// Function to change the quantity of an item in the cart
function changeQuantity(index, change) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + change;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1; // Minimum quantity is 1
        }
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateTotalPrice(); // Update total price whenever quantity changes
}

let redirectTimeout;

// Event listener for checkout button click
document.getElementById('checkout_button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';

    // Set a timeout to redirect after 2 seconds (2000 milliseconds)
    setTimeout(function() {
        window.location.href = 'https://www.paypal.com';
    }, 2000); // Adjust timeout duration as needed
});

// Event listener for closing the popup
document.getElementById('closePopupButton').addEventListener('click', function() {
    // Hide the overlay and popup
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    clearTimeout(redirectTimeout);
});
