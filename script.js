document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const termsChecked = document.getElementById("terms").checked;
  const successMessage = document.getElementById("successMessage");

  successMessage.textContent = ""; // Reset message

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!termsChecked) {
    alert("You must accept the Terms and Conditions.");
    return;
  }

  successMessage.textContent = "Successfully Registered!";
  this.reset(); // Clear form fields
});
