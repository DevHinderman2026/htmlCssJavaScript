# ai06 Questions

## 1. Name the four parts of the box model from the inside out. Which part does a background color fill?

The 4 parts of a box model are content, padding, border, and margin. The background fills in the sticky headers.

## 2. "Add more space inside the cards" and "add more space between the cards" are two different requests. Which property is each one?

The space inside is the padding, and the space outside the border is the margin.

## 3. An element is 200 pixels wide, with 20 pixels of padding on each side and a 5 pixel border. How wide is it on the screen without box-sizing border-box? How wide is it with it? Show your math.

Border box stays at 200. 5 plus 20 plus 200 plus 20 plus 5 equals 250, 50 bigger than 200.

## 4. Pick one rule in your styles.css that uses shorthand with two values, like padding 0.75rem 1rem. Which sides does each value set?

In the page overview rule, padding: 0.75rem 1rem, 0.75rem sets the page top and bottom. 1rem sets the page left to right.

## 5. What is the difference between display block, display inline, and display inline-block? Why did your nav links need inline-block?

A block is a line in a site that takes the whole width of the screen. Inline is the text, and inline-blocks are good for buttons since each one would have more room.

## 6. What is the difference between display none and visibility hidden? Your skip link uses neither one. How does it stay hidden, and why can it not use display none?

When the visibility is hidden, you can't see the element, but it still takes up its space and leaves a gap. If something is set to display none, it is removed completely, and the screen reader will not announce it. The skip link uses neither one. It stays hidden by being moved off the top of the screen, and it moves back to the top when it gets keyboard focus. It can't use display none, because then the Tab key and screen readers couldn't reach it.

## 7. What does position sticky do? Why does a sticky header need a solid background, and why did you add scroll-padding-top?

The sticky header allows the top to not scroll off the page. A solid background is necessary to prevent text from becoming see-through. Scroll-padding-top also prevents the link from falling under the header when pressing the Tab key.

## 8. Your nav links have a hover style and a focus style. Who is each one for, and why does a site need both?

A focus style is used for screen readers and or keyboard users. However, a hover style is for a mouse, when you hover over a link. A site needs both because of user preferences.
