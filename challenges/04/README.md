# Advanced Events

## Challenges

**Compare your result with the demo**.

### 01

Using `books.html`. When a user clicks one of the book titles, use the `data` attributes to display the price and author of the book.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/books/books.html)

### 02

Using `button.html` when the button is clicked it creates another button, which when clicked creates another button. Use event delegation so that you only have to use a single event listener.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/button/button.html)

### 03

Using `paragraphs.html`. When the user clicks on a paragraph it should be given the class `selected`. When the user clicks the "Remove" button, all of the selected paragraphs should be removed from the page.

*Note*: Remember, you should use state variables to track changes, rather than asking the DOM

*Hint*: You can store `HTMLElement` objects in an array

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/paragraphs/paragraphs.html)

### 04

Using `spans.html`. Use event delegation to efficiently handle click events on the spans. When a `<span>` is clicked, it's background colour should change to black. For bonus points, if it is clicked again, it should change back to white.

*Note*: Remember, you should use state variables to track changes, rather than asking the DOM

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/spans/spans.html)

---

## Tricksy Challenges

### 05

Recreate the calculator challenge from yesterday, but only use a single `click` event handler.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/calculator/calculator.html)


### 06

Using `form.html`. When the user submits the form any empty fields should be given [a red border](http://getbootstrap.com/css/#forms-control-validation) and [a message saying "Field required"](http://getbootstrap.com/css/#forms-help-text). If the user corrects a field it should return to its default once the form is resubmitted. Make sure it submits if the everything is valid. You'll need to take Bootstrap 3 styles into account

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/form/form.html)

### 07

Using `shopping.html`. Use event delegation to efficiently handle click events on the Add buttons. When an Add button is clicked, the item should be added to the shopping list below. Use the `data` attributes of the Add buttons to get the relevant data. Make sure to update the total.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/shopping/shopping.html)

### 08

Using `mouse.html`. Make it so that green box follows the mouse around the screen. You'll need to look at the [`MouseEvent` documentation](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/mouse/mouse.html)

### 09

Using `konami.html`. If the user types in the Konami code (↑↑↓↓←→←→BA) something funny happens.

**Hint**: You'll need to look at the [documentation for key events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/04/answers/konami/konami.html) - It doesn't have to do the same thing!
