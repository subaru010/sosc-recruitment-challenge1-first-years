document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("info-btn");
    const nameHeading = document.getElementById("name");

    button.addEventListener("click", function () {
        // simple effect: toggle a highlight on your name
        if (nameHeading.style.color === "yellow") {
            nameHeading.style.color = "";
        } else {
            nameHeading.style.color = "yellow";
        }
    });
});
