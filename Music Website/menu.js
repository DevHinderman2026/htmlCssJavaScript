// menu.js - The Artist Who Only Uses Ears
// On phones (screens 768 pixels wide or less), the main navigation links hide
// behind a three-line button. Screen readers hear its name: Toggle navigation menu.
// On laptops and desktops, the button is hidden and the links always show.
// If JavaScript is off or this file fails to load, the button stays hidden
// and the five links stay visible, so the site still works.

const menuButton = document.querySelector(".menu-toggle");
const menuList = document.getElementById("main-menu");

// The same screen size the phone media query in styles.css uses.
const phoneScreen = window.matchMedia("(max-width: 768px)");

// Opens or closes the menu. aria-expanded tells screen readers
// whether the menu is open (true) or closed (false).
function setMenuOpen(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuList.hidden = !open;
}

// Phone: show the button and start with the menu closed.
// Laptop or desktop: hide the button and always show the links.
function fitMenuToScreen() {
    if (phoneScreen.matches) {
        menuButton.hidden = false;
        setMenuOpen(false);
    } else {
        menuButton.hidden = true;
        setMenuOpen(true);
    }
}

if (menuButton && menuList) {

    fitMenuToScreen();

    // Check again whenever the screen changes size, like when a phone is
    // turned sideways or a browser window is resized or zoomed.
    phoneScreen.addEventListener("change", fitMenuToScreen);

    // Each press of the button opens the menu if it is closed, or closes it if it is open.
    menuButton.addEventListener("click", function () {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    // On a phone, pressing Escape while on one of the menu links closes the menu
    // and moves keyboard focus back to the button.
    menuList.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && phoneScreen.matches) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
}
