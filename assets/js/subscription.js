  // Get a reference to the form element
  const form = document.getElementById('subscription-form');

  // Add an event listener for the form submission
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email value from the form
    const email = document.getElementById('email').value;

    // Basic email validation (you can improve this with a regular expression)
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert('Please enter a valid email address.');
      return; // Exit the function if email is invalid
    }

    // Display a confirmation message (assuming you don't have a separate confirmation page)
    alert('Thank you for subscribing! We will send you updates to ' + email);

    // You can also clear the form after successful submission
    form.reset();
  });