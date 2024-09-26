document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get all form data
    const creditCard = document.getElementById('inputCreditCard').value;
    const nameOnCard = document.getElementById('inputNameOnCard').value;
    const pin = document.getElementById('inputPin').value;
    const cvv = document.getElementById('inputCVV').value;
    const expDate = document.getElementById('inputExpDate').value;
    const amount = document.getElementById('inputAmount').value;

    // Display "Processing Payment" message
    document.getElementById('child1').innerHTML = `
        <h3 class="child1-h3">Processing Payment...</h3>
    `;

    // Simulate payment processing delay
    setTimeout(() => {
        // Display payment info in the child1 div after 3 seconds
        document.getElementById('child1').innerHTML = `
            <h3 class="child1-h3">Payment Complete</h3>
            <p><strong>Payer Name:</strong> ${nameOnCard}</p>
            <p><strong>Amount Paid:</strong> $${amount}</p>
            <p><strong>Thank you for your payment!</strong></p>
        `;

        // Clear form values
        resetForm();
    }, 3000);
});

function resetForm() {
    document.getElementById('paymentForm').reset();
}
