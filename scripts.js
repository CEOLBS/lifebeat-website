document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
  
    forms.forEach(form => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailField = form.querySelector("input[type='email']");
        const messageField = form.querySelector("textarea");
  
        const email = emailField ? emailField.value.trim() : "";
        const message = messageField ? messageField.value.trim() : "";
  
        if (email === "") {
          alert("Please enter a valid email.");
          return;
        }
  
        // Simulate form processing
        alert("✅ Thank you! We'll be in touch at: " + email);
  
        // Optional: Log message content
        if (message !== "") {
          console.log("Message submitted:", message);
        }
  
        form.reset();
      });
    });
  });
  