// beta-alert.js - The Artist Who Only Uses Ears
// The Musician Forge alert at the top of the home page uses role="alert",
// an assertive ARIA live region. A live region is read aloud when its content
// CHANGES, and an assertive one interrupts whatever the screen reader is saying.
// Many screen readers stay quiet about a live region that is already there
// when the page loads, so this script empties the alert and puts the same
// words back a moment later, which makes screen readers like NVDA announce it.
// If JavaScript is off, the alert still shows and can be read in page order.

const betaAlert = document.querySelector(".beta-alert");

if (betaAlert) {
    const message = betaAlert.innerHTML;
    betaAlert.innerHTML = "";

    setTimeout(function () {
        betaAlert.innerHTML = message;
    }, 1000);
}
