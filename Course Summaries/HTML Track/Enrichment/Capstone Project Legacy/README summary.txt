Summary of: README.md
Course: HTML CSS JavaScript track
Lesson: Capstone Project Legacy
Type of document: README

In one sentence:
This README is the table of contents for the older html14 capstone project, listing every planning document and every file of the example website, and explaining how teachers and students should use them.

Main ideas:
1. The capstone is called "Multi-Page Responsive Website." It is the final project that pulls together the whole semester: HTML, CSS, responsive design, JavaScript form validation, SEO, accessibility, and deployment.
2. The folder has two groups of files. The first group is four planning and grading documents: the Capstone Spec (full requirements, 10 theme ideas, 6-session timeline), the Planning Template (a fill-in worksheet), the Rubric (7 grading categories), and the Self-Assessment (a student checklist plus reflection questions).
3. The second group is a finished example website for a made-up coffee shop called Mountain View Coffee Co. It has four HTML pages, one stylesheet, and one JavaScript file.
4. The home page (index) has a hero section, feature cards, weekly specials, and customer testimonials.
5. The about page has the company story, mission, four team member profiles in a grid, core values (with emoji icons), and a company timeline.
6. The menu page contains the required data table: a coffee comparison guide with 6 columns and 6 rows, plus menu item cards with prices, grouped in article elements.
7. The contact page contains the required form, with 6 fields that have validation attributes, contact information cards, a placeholder map image, and other ways to connect.
8. The stylesheet (about 1,099 lines) uses CSS custom properties (variables) for colors, fonts, and spacing; media queries at 768 pixels (tablet) and 480 pixels (mobile); a sticky header; a hamburger menu for small screens; grid layouts; form error styling; a table with alternating row colors; hover transitions; and print styles.
9. The script (about 347 lines) validates five contact-form fields: name must be 2 or more characters, email must match a pattern (a regular expression), phone is optional but needs 10 or more digits if filled in, a subject must be chosen from the dropdown, and the message must be at least 10 characters. It shows error messages, checks fields when you leave them (the blur event), shows a success message, resets the form, toggles the hamburger menu, closes the mobile menu when a link is clicked, smooth-scrolls to in-page links, and closes the menu when you press Escape.
10. The README lists what the example demonstrates, grouped by Ohio Department of Education (ODE) Strand 6 outcomes: 6.1 valid semantic HTML5, 6.2 CSS styling and visual design, 6.3 responsive layouts, 6.4 JavaScript validation and interactivity, 6.5 deployment plus SEO and accessibility.
11. SEO and accessibility claims for the example: descriptive titles, meta descriptions of 100 to 160 characters, correct heading order, high color contrast, alt text on every image, full keyboard navigation with Tab, labels tied to inputs, and semantic HTML.
12. How to use the files. Teachers: read the spec for scope, hand out the planning template in Session 1, grade with the rubric, show the example as a model of excellent work, and hand out the self-assessment at the end. Students: read the spec, complete the planning template before coding, look at the example code when stuck, check yourself with the rubric, and finish the self-assessment before submitting.
13. Project facts: about 10 to 12 hours of lab time over 5 to 6 sessions; the grade is out of 100 points; grade scale A is 90 to 100, B is 80 to 89, C is 70 to 79, D is 60 to 69, F is below 60.
14. Implementation notes: the example images come from a placeholder photo service (picsum.photos) so the site works right away, and the form does not really send anything because there is no back end (server); it only demonstrates validation.

Key terms:
Capstone — a final project that combines everything learned in a course.
Example solution — a finished sample website that shows what excellent work looks like.
CSS custom properties — CSS variables, such as a named color defined once and reused everywhere.
Mobile-first — writing the base CSS for small screens and adding rules for bigger screens.
Media query — a CSS rule block that only applies at certain screen widths.
Hamburger menu — a button that shows or hides the navigation links on small screens.
Blur event — the JavaScript event that fires when a field loses focus (you tab or click away).
Regex (regular expression) — a text pattern used to check a format such as an email address.
ODE Strand 6 — the Ohio state competency group for web design that this project covers (6.1 to 6.5).
Placeholder image service — a website that returns sample photos by URL, used here as picsum.photos.

What you are asked to do:
The README itself is not an assignment, but it gives the student workflow:
1. Read the Capstone Spec for all requirements.
2. Complete the Planning Template before starting to code.
3. Use the example solution files for reference when stuck (HTML for page organization, CSS for styling and responsive design, JavaScript for validation patterns).
4. Use the rubric to evaluate your own work.
5. Complete the Self-Assessment before submitting.
The project is worth 100 points total.

Watch out for:
- The form in the example never sends data; a success message is shown only to demonstrate validation.
- Correction: the example stylesheet is desktop-first, not mobile-first; it uses max-width media queries to shrink a desktop layout. Mobile-first means base styles for small screens plus min-width queries for bigger screens, and that is what the course requires for your own site.
- Correction: test your site at the Capstone Spec's ranges, mobile under 600 pixels, tablet 600 to 1024, and desktop 1024 and up. The README lists those same ranges, but the example stylesheet's breakpoints are 768 and 480 pixels, which is just one way to build it.
- Heads up: the README's file count says 10 files, but the folder actually holds 12, the 10 listed plus this README and the Implementation Guide. Nothing is missing.

Connects to:
This capstone combines topics from html02 Semantic HTML, html04 Images Media and Tables, html07 Flexbox and Responsive Design, html08 HTML Forms, html09 JavaScript, and html10 Site Quality and Publishing.
