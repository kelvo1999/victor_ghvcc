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
                document.getElementById("popup-container").style.display = "none"; // Hide the form popup
                document.getElementById("successPopup").style.display = "block"; // Show success popup
                form.reset(); // Clear the form fields
            } else {
                alert("Failed to subscribe. Please try again.");
            }
        })
        .catch(error => {
            alert("Error sending message.");
        });
});

// Close success popup
function closeSuccessPopup() {
    document.getElementById("successPopup").style.display = "none";
}