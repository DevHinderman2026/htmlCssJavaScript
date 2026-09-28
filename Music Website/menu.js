// menu.js - The Artist Who Only Uses Ears
// Turns the main navigation list into a Menu button that opens and closes it.
// If JavaScript is off or this file fails to load, the button stays hidden
// and the five links stay visible, so the site still works.

const menuButton = document.querySelector(".menu-toggle");
const menuList = document.getElementById("main-menu");

if (menuButton && menuList) {

    // Show the button and start with the menu closed.
    menuButton.hidden = false;
    menuList.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");

    // Each press of the button opens the menu if it is closed, or closes it if it is open.
    // aria-expanded tells screen readers whether the menu is open (true) or closed (false).
    menuButton.addEventListener("click", function () {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuList.hidden = isOpen;
    });

    // Pressing Escape while on one of the menu links closes the menu
    // and moves keyboard focus back to the Menu button.
    menuList.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            menuButton.setAttribute("aria-expanded", "false");
            menuList.hidden = true;
            menuButton.focus();
        }
    });
}
