Summary of: README.md
Course: HTML CSS JavaScript track
Lesson: html06 Box Model and Spacing
Type of document: README (teacher lesson overview)

In one sentence:
This README is the teacher's overview of lesson 06, listing its files, the teaching order, learning objectives, key concepts, no-dev-tools debugging methods, common mistakes, assessments, and extension ideas.

Main ideas:
1. The lesson covers the CSS box model and spacing properties plus display and positioning. It maps to Ohio competency 6.5.8, Format Website Layout. Suggested time is 20 to 30 minutes of instruction plus activities.
2. Two sub-lessons: 06a Box Model (margin, padding, border, width and height, box-sizing) and 06b Display and Positioning (block, inline, inline-block, and the position values).
3. Files the README lists: the slides (described as 10 slides), the study guide (vocabulary, cheat sheet, debugging checklist), the walkthrough (described as 4 parts), the two task starters 06a and 06b, the DIY project with rubric, and teacher-only material: solution HTML and CSS files for the walkthrough, both tasks, and the DIY project, plus a Gimkit file and a Google Quiz file of 30 questions each. The README says the lesson totals 16 files.
4. Teaching flow: (1) 10 minute introduction with the slides, the box model diagram, and padding versus margin; (2) 15 minute guided walkthrough, including the outline X-ray trick because dev tools are disabled on student machines; (3) 15 minutes on Task 06a, stressing border-box and checking spacing with the X-ray trick; (4) 15 minutes on Task 06b, focusing on display and position and building a fixed header and footer; (5) one to two class periods on the independent project (card component plus page layout, graded with the rubric); (6) assessment using Gimkit for review and the Google Quiz for a formal grade, both covering all the content.
5. Learning objectives. Students will: understand the four layers of the box model; apply padding and margin correctly; use border-box to prevent width problems; understand display values block, inline, inline-block, none; understand position values static, relative, absolute, fixed; create multi-column layouts with display and position; create fixed headers and footers; debug with the X-ray trick and the W3C validator; build professional card components; and design responsive page layouts.
6. Box model in words: four layers from the inside out, content, then padding, then border, then margin on the exterior.
7. Display values: block is full width on a new line (div, p); inline flows with text and ignores width and height (span, a); inline-block flows inline but respects width and height; none is completely hidden.
8. Position values: static is normal flow and the default; relative is offset from its normal position and still in the flow; absolute is placed relative to a positioned parent and removed from the flow; fixed is placed relative to the viewport and stays when scrolling.
9. Debugging without dev tools: the X-ray trick (* { outline: 1px solid red; } at the top of the stylesheet, which shows every box edge without shifting anything); the W3C validator at validator.w3.org for "why is my page broken" questions; and paper box-model diagrams for adding up total element width.
10. Quiz topics: box model terms, property purposes and values, width calculations and formulas, display and position values, X-ray trick use, and common misconceptions.
11. Extension ideas by level. Beginner: change padding and margin with the X-ray trick on and watch boxes move, make cards in different color schemes, add button hover effects. Intermediate: responsive layout with media queries, gradient backgrounds, CSS transitions and animations, multi-level navigation. Advanced: CSS Grid card layouts, a multi-section dashboard, sticky headers, CSS custom properties (variables).
12. Resources: MDN pages on the box model, display, and position. All lesson files use valid HTML5 and CSS3, semantic elements, border-box, thorough comments, and mobile-responsive design where applicable, with no external dependencies.

Key terms:
box model — content, padding, border, margin, from the inside out
box-sizing: border-box — width includes padding and border
display — block, inline, inline-block, none
position — static, relative, absolute, fixed
X-ray trick — a temporary outline on every element to see box edges
W3C validator — the free online checker at validator.w3.org that finds HTML errors
z-index — stacking order of overlapping elements
Gimkit — a quiz game used for review
ODE competency 6.5.8 — the Ohio standard Format Website Layout

Watch out for:
Common mistakes table, in words:
- Width too wide: add box-sizing border-box to the star selector.
- Header overlaps content: add margin-top or padding-top to main.
- position absolute breaks the layout: the parent must have position relative, absolute, or fixed.
- Cannot see a fixed element: check its z-index value.
- Margin not working: check whether the parent has display flex or grid.
Heads up: the solution files and the two quiz CSV files in the README's list are teacher-only and are not in your copy of the folder, so study from the slides, study guide, and walkthrough instead. The folder also has html06_ExtensionTask.md, which the README leaves out; it is a real optional extra-credit task.

Connects to:
The extension ideas (media queries, CSS Grid) lead into html07 Flexbox and Responsive Design. The archived AI track has a parallel ai06 Box Model and Spacing lesson.
