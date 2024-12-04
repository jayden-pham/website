function copyEmail() {
    const email = "khanhak299@gmail.com";

    // Create a temporary input to copy the email
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show the "Copied!" message immediately
    const message = document.getElementById("copy-message");
    message.style.opacity = "1"; // Make it fully visible

    // Wait 2 seconds, then fade out over 1 second
    setTimeout(() => {
      message.style.opacity = "0"; // Gradually fade out
    }, 2000); // Wait 2 seconds before starting the fade
}