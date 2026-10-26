# ai08 Questions

## 1. How is a label connected to its input? What does that connection give a screen reader user, and what does clicking the label do for a mouse user?

The label is the element name on the form. If the label and input were not connected, the screen reader would not read the element.

Note: I kept this answer as I first wrote it so Mr. McMaster can give me feedback. It does not yet say how the label is connected, which is the for attribute on the label matching the id on the input. It also leaves out what clicking the label does for a mouse user.

## 2. What is the difference between radio buttons and checkboxes? Name one place on your form where you used each, and why.

Radio buttons are good for picking one option only, such as a choice on a question. This would be for selecting which kind of collaboration. However, checkboxes are good for when you need to select multiple items. For example, genres.

## 3. What does a legend do for a group of radio buttons when a screen reader enters the group?

The legend gives the screen reader user the name of the group so they know where they're at. The radio buttons would have the group described in them.

## 4. Why must all the radio buttons in one group share the same name?

If the same name is not shared for radio buttons in a group, the buttons would not be descriptive and you may not answer the right question that actually belongs to the group.

Note: I kept this answer as I first wrote it so Mr. McMaster can give me feedback. I found this question confusing.

## 5. What is the difference between method get and method post? Which one belongs on a form that sends personal information, and why?

Get is used for things that can be seen or bookmarked. However, post is useful for dealing with personal information because it doesn't show up in the address bar.

## 6. What does the action attribute do? What happens when your form is sent today, and what would happen on a real website?

An action attribute is how a form is sent. The browser sends the form to a web address. However, companies use their own servers.

Note: I kept this answer as I first wrote it so Mr. McMaster can give me feedback.

## 7. When you sent your form, what did you hear in the address bar? What does that tell you about the name attribute?

In a test with the form set to method get, the address bar had a question mark and then each name with its answer: name=Russell, email=russell@example.com, request=co-write, genres=electronic, genres=ambient, reply=phone, message=Hello. In a second test, the email box had no name attribute, and the email was missing from the address. If a box has no name attribute, nothing from that box would be sent.

Note: Claude ran this test for me, because my form now uses post and does not show the answers in the address bar.

## 8. Give two reasons why placeholder text is not a good replacement for a label.

Placeholder text can get lost and it doesn't reliably work with screen readers. It is also quite hard to read visually.

## 9. What does tabindex do? Why is it usually better to fix the order of the HTML instead?

Tabindex changes the order on a site for tab keys. The form could look backwards to a sighted user, which would be very confusing.
