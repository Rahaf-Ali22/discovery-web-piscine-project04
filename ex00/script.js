document.addEventListener("DOMContentLoaded", function () {

    // 1. LIGHT / DARK THEME SWITCHER

    const themeButton = document.createElement("button");

    themeButton.type = "button";
    themeButton.className = "theme-toggle";
    themeButton.textContent = "🌙 Dark Mode";
    themeButton.setAttribute("aria-label", "Switch to dark mode");

    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const darkMode = document.body.classList.contains("dark-mode");

        themeButton.textContent = darkMode
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";

        themeButton.setAttribute(
            "aria-label",
            darkMode ? "Switch to light mode" : "Switch to dark mode"
        );
    });


    // 2. INTERACTIVE PROJECT FLIP CARDS

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        const front = card.querySelector(".project-card-front");
        const back = card.querySelector(".project-card-back");

        const openButton = document.createElement("button");
        openButton.type = "button";
        openButton.className = "flip-button";
        openButton.textContent = "View Details";
        front.appendChild(openButton);

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "flip-button";
        closeButton.textContent = "Go Back";
        back.appendChild(closeButton);

        openButton.addEventListener("click", function () {
            card.classList.add("is-flipped");
            closeButton.focus();
        });

        closeButton.addEventListener("click", function () {
            card.classList.remove("is-flipped");
            openButton.focus();
        });

    });


    // 3. CONTACT FORM

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const name = document.querySelector("#contact-name").value.trim();
            const email = document.querySelector("#contact-email").value.trim();
            const subject = document.querySelector("#contact-subject").value.trim();
            const message = document.querySelector("#contact-message").value.trim();

            const emailBody =
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message;

            const mailtoLink =
                "mailto:rahafu722@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(emailBody);

            window.location.href = mailtoLink;

        });
    }

});
