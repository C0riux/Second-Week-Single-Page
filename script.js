const signupForm = document.getElementById("signup-form");
const blueModeForm = document.getElementById("blue-mode-form");

signupForm.addEventListener("submit", function() {
    const emailBox = document.getElementById("email");
    const messageTag = document.getElementById("signup-message");
    const email = emailBox.value;

    messageTag.textContent = "Thank you! " + email + " has been signed up for our newsletter.";
    signupForm.reset();
})

blueModeForm.addEventListener("submit", function() {
    const blueModeButton = document.getElementById("blue-mode-button")
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const body = document.getElementById("body");
    const nav = document.getElementById("nav");
    const blueModeCaption = document.getElementById("blue-mode-text");
    const blueModeCaptionText = "Not a fan of purple? Try blue mode!";
    const purpleModeCaptionText = "Not a fan of blue? Try purple mode!";
    const blueModeText = "Blue Mode";
    const purpleModeText = "Purple Mode";
    const headerPurple = "#340D4A";
    const footerPurple = "#340D4A";
    const bodyPurple = "#642987";
    const navPurple = "#B190DE";
    const headerBlue = "#1A3373";
    const footerBlue = "#1A3373";
    const bodyBlue = "#2A68DE";
    const navBlue = "#5F99F5";

    if (blueModeButton.textContent == blueModeText) {
        blueModeButton.textContent = purpleModeText;
        blueModeCaption.textContent = purpleModeCaptionText;
        header.style.background = headerBlue;
        footer.style.background = footerBlue;
        body.style.background = bodyBlue;
        nav.style.background = navBlue;
    } else {
        blueModeButton.textContent = blueModeText;
        blueModeCaption.textContent = blueModeCaptionText;
        header.style.background = headerPurple;
        footer.style.background = footerPurple;
        body.style.background = bodyPurple;
        nav.style.background = navPurple;
    }
})