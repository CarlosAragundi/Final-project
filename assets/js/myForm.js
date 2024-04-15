function submitForm() {
    // Get form data (optional)
    const message = document.getElementById("message").value;
  
    // Validation (optional)
    if (message.trim() === "") {
      alert("Please enter your valid information!");
      return;
    }
  
    // Create and display the pop-up message
    alert("Your information was entered successfully! Stay tuned for new information.");
  
    // Optionally clear the form after successful validation
    document.getElementById("myForm").reset();
  }