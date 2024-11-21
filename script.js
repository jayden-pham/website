// Toggle dark mode and light mode
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});