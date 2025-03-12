document.addEventListener("DOMContentLoaded", function() {
    const plane = document.getElementById("t-icon");
    const points = Array.from(document.querySelectorAll(".t-point"));
    let currentIndex = 0;
    let direction = 1;

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