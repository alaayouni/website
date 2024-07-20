// Function to add item to cart
function addToCart(name, price, picture) {
    console.log(`Adding ${name} to cart`);
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push({ name, price, picture });
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert(name + ' wurde zum Warenkorb hinzugefügt!');
    displayCartItems(); // To update the cart display immediately
    updateTotalPrice();
}
document.querySelectorAll('.fas.fa-heart').forEach(function(element) {
    // Add click event listener to each element
    element.addEventListener('click', function() {
        // Toggle the active class on the clicked element
        element.classList.toggle('active');
    });
});

// Function to toggle like button
function toggleLike(element) {
    console.log('Toggling like');
    element.classList.toggle('liked');
}

console.log('shop.js loaded');
