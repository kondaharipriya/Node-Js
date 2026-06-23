document.addEventListener('DOMContentLoaded', function() {
  const addToCartButton = document.getElementById('addToCart');
  const checkOutButton = document.getElementById('checkout');
  const quantityInput = document.getElementById('quantity');
  
  // Grab the new paragraph tag where we want to show the quantity
  const totalItemsDisplay = document.getElementById('totalItemsDisplay');
  
  // Variable to keep track of total items
  let totalQuantity = 0; 

  // Function to validate quantity
  function validateQuantity() {
    const quantity = parseInt(quantityInput.value);
    
    if (isNaN(quantity) || quantity < 1) {
      alert("Invalid quantity. Please enter a quantity of 1 or more.");
      quantityInput.focus();
      return false;
    }
    return quantity; // Return the actual number instead of just "true"
  }

  // Add to cart click event
  addToCartButton.addEventListener('click', function() {
    const validQuantity = validateQuantity();
    
    if (validQuantity !== false) {
      // Add the valid input to our running total
      totalQuantity += validQuantity;
      
      // Update the text in the checkout tag
      totalItemsDisplay.innerText = `Total Items in Cart: ${totalQuantity}`;
      
      alert("Item added to cart successfully!");
      
      // Optional: reset the input field back to empty after adding
      quantityInput.value = ''; 
    }
  });

  // Checkout click event
  checkOutButton.addEventListener('click', function() {
    if (totalQuantity > 0) {
      alert("Redirecting to payment page...");
    } else {
      alert("Your cart is empty! Please add items before checking out.");
    }
  });
});