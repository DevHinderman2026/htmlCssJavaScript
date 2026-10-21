# ai07 Questions

## 1. What does the viewport meta tag tell a phone's browser to do? What does a phone show without it?

The tag is used to set the initial scale and match the width of the phone screen. Without it, the phone would shrink the desktop version of the site, so small that the user wouldn't be able to read the text. They would have to zoom in.

## 2. In flexbox, which element gets display flex, the parent or the items inside it? What do justify-content and align-items each control?

The parent gets the display flex. Justified is left to right. Alignment is up and down.

## 3. Your cards have flex 1 and a minimum width of 15 rem, and the row has flex-wrap wrap. What happens to the cards as the screen gets narrower?

The cards would shrink to fit the screen. When the cards reach the minimum width of 15rem, the cards would wrap to a new line.

## 4. What does a media query with max-width 768 pixels do? What did yours change on a phone?

A 768 media query allows items to fit on a phone screen. Items are stacked instead of being placed side by side.

## 5. What does mobile-first mean? How is it different from the way you wrote your media query?

Mobile first is a website constructed for phones and tablets. For mobile sites, queries for mobile are used first. However, the music site is for desktop, but flexbox allows it to work on mobile devices.

## 6. In the row-reverse test, what order did you hear the links in, and what order did Claude say they looked like? Why should the visual order and the reading order match?

The screen reader reads the items forward, but visually, the site reads backward. The visual order needs to match so that a sighted user can tab with the keyboard and everything would wrap forwards.

## 7. Why does your Discography table scroll inside its own box on a phone instead of making the whole page scroll sideways?

The table scrolls inside its own box to prevent the site from overflowing the screen.

## 8. What is template.html for? How does it make your site faster to build and more consistent?

The template is used to build websites faster because they have starting points. The beginning of templates includes footers and nav links. All of the pages that use this template would have the same kind and/or colors of elements.

## 9. In your own words, how is CSS Grid different from flexbox?

Grid lays items out in rows and columns. However, flexbox only goes in one direction.

## 10. A small restaurant wants to reach customers on phones and laptops. Should it get a responsive website, a mobile app, a desktop app, or a web application? Pick one and say why.

A responsive site is the better call here. A desktop app would not work well due to the fact that on phones the text would be too small. Web and mobile applications wouldn't be great either, especially mobile applications. For mobile apps, it would be mobile only. The web application is not a great fit because of logging in and the cost to build. Since the site needs to work on mobile and desktop, responsive is the best choice.
