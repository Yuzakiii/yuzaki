// Define functions for cart operations

function addToCart(itemName, itemPrice) {
    // Retrieve existing cart items from local storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push({ name: itemName, price: itemPrice });

    // Update the cart count on the main page
    updateCartCount(cart.length);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function openCart() {
    window.open('shopping_cart.html', '_blank');
}

function updateCartCount(count) {
    document.getElementById('cart-count').innerText = count;
}

function clearCart() {
    // Clear the cart items in local storage
    localStorage.removeItem('cart');

    // Update the cart count on the main page
    updateCartCount(0);

    // Reload the shopping cart page to reflect the changes
    location.reload();
}

// Load the cart count when the page loads
document.addEventListener('DOMContentLoaded', function () {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount(cart.length);
});
