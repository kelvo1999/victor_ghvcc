const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check if user has a preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "Mode ";
}

// Toggle Function
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save User Preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "Mode ";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "Mode";
    }
});