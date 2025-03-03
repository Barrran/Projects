// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Shopping Cart
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.productName;
            const price = parseFloat(this.dataset.price);
            cart.push({ name: productName, price: price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total.toFixed(2);
    }

    document.getElementById('checkout').addEventListener('click', function() {
        alert('Checkout functionality to be implemented.'); // Replace with actual checkout process
    });

    // Appointment Booking
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentMessageDisplay = document.getElementById('appointmentMessageDisplay');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('appointmentName').value;
        const email = document.getElementById('appointmentEmail').value;
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        // Simulate sending appointment data (replace with actual backend integration)
        console.log('Appointment Data:', { name, email, date, time });
        appointmentMessageDisplay.textContent = 'Appointment request submitted!';
        appointmentMessageDisplay.classList.add('success');
        appointmentForm.reset();
    });

    // Contact Form (from previous example)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // ... (your contact form submission logic)
    });

});

// ... (Your existing JavaScript code)

document.getElementById('checkout').addEventListener('click', async function() {
    const total = parseFloat(document.getElementById('cart-total').textContent) * 100; // Stripe uses cents
    try {
        const response = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: total, currency: 'usd' }), //change currency if needed
        });
        const { clientSecret } = await response.json();

        const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY'); //add publishable key.

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: stripe.elements().getElement('card'), // if using stripe elements, or get card details from a different form.
            },
        });

        if (error) {
            console.error(error.message);
            alert('Payment failed: ' + error.message);
        } else {
            console.log('Payment successful:', paymentIntent);
            alert('Payment successful!');
            // Clear the cart, update order status, etc.
        }
    } catch (error) {
        console.error('Error processing payment:', error);
        alert('An error occurred during payment.');
    }
});

// Create Stripe Elements (If you're using Stripe's pre-built UI)
const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element'); //place where card element will mount.
