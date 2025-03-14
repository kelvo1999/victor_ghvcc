document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xzzezbdl", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById("responseMessage").textContent = "Thank you for subscribing!";
                document.getElementById("responseMessage").style.display = "block";
                form.reset(); // Clear the form fields
            } else {
                document.getElementById("responseMessage").textContent = "Failed to send message.";
                document.getElementById("responseMessage").style.color = "red";
                document.getElementById("responseMessage").style.display = "block";
            }
        })
        .catch(error => {
            document.getElementById("responseMessage").textContent = "Error sending message.";
            document.getElementById("responseMessage").style.color = "red";
            document.getElementById("responseMessage").style.display = "block";
        });
});