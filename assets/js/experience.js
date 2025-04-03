document.addEventListener("DOMContentLoaded", function() {
    const plane = document.getElementById("t-icon");
    const points = Array.from(document.querySelectorAll(".t-point"));
    let currentIndex = 0;
    let direction = 1;
    const message = document.getElementById("message"); // Get the message element

    // Function to display the message
    function showMessage() {
        message.style.opacity = 1;
        setTimeout(() => {
            message.style.opacity = 0;
        }, 5000); // Hide after 5 seconds (5000 milliseconds)
    }

    // Call the showMessage function when the page loads
    showMessage();

    function movePlane() {
        if (currentIndex >= 0 && currentIndex < points.length) {
            const target = points[currentIndex];
            plane.style.left = target.style.left;
            document.querySelectorAll(".company-info").forEach(div => div.style.display = "none");
            document.getElementById(target.dataset.company).style.display = "block";
            
            if (currentIndex === points.length - 1) {
                direction = -1;
            } else if (currentIndex === 0) {
                direction = 1;
            }
            currentIndex += direction;
        }
    }

    plane.addEventListener("click", movePlane);
});