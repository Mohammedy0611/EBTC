// Initialize EmailJS with your user ID
(function () {
  emailjs.init("info@myebtc.org"); // Replace with your EmailJS user ID
})();

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("msg").value,
    };

    // Send the email using EmailJS
    emailjs.send("service_73sxylp", "template_0zf4iwk", formData).then(
      function (response) {
        // Success callback
        alert("Message sent successfully!");
        console.log("Success:", response.status, response.text);

        // Reset the form after submission
        document.getElementById("contact-form").reset();
      },
      function (error) {
        // Error callback
        alert("Failed to send message. Please try again.");
        console.log("Error:", error);
      }
    );
  });
