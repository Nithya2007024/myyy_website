

// Display current year in footer
document.addEventListener("DOMContentLoaded", function() {


    let footer = document.querySelector("footer");


    if (footer) {
        footer.innerHTML =
        "© " + new Date().getFullYear() +
        " Nithya H A | All Rights Reserved";
    }


    // Welcome message
    console.log("Welcome to Nithya's Personal Website!");


});

