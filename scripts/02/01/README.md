# Day 2: Morning

## Querying Elements
- Properties:
    - Width in px: `el.clientHeight`
    - Height in px: `el.clientWidth`
    - Width in px (including border): `el.offsetHeight`
    - Height in px (including border): `el.offsetWidth`
    - Position relative to page: `el.getBoundingClientRect()`
    - Just text as string: `el.textContent`
- Careful with height/width if not visible
- Show storing in a variable for later use with `height` - `+ "px"`

## Document Properties
- `window` properties:
    - The Browser Object Model
    - `window.pageYOffset`
    - `window.pageXOffset`
    - `window.innerHeight`
    - `window.innerWidth`
- `document.body` properties:
    - `document.body.offsetHeight`
    - `document.body.offsetWidth`
- `window` is the global object in the Browser

## CSS Object Model
- CSS Object Model
- `el.style` property:
    - `el.style.border = "1px solid red"`
    - `el.style.marginTop = "20px"`
    - **`el.style.transform = "translate(20px, 20px)"`**

        ```js
        let cards = d.getElementById("cards");

        let loop = t => {
            cards.style.transform = `translateY(${t / 10}px)`;
            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);
        ```

   - `el.style.position = "absolute"`
- Height/width (include "px"):
    - `el.style.height = "200px"`
    - `el.style.width = "200px"`
- Better to use classes than `style`, but necessary for computer properties
- Changing the DOM causes a re-render!
- Assigning/returning values gives back the last value, not useful
    - `let z = x.blah = "fish"` - sets both to "fish"
    - `return x.blah = "fish"` - returns "fish"

## Text Content
- `el.textContent = "New Title"`
- Careful, removes everything inside

## Attributes
- Attribute methods:
    - `input.getAttribute("name")`
    - `input.getAttribute("value")`
    - `input.setAttribute("value", "600")`
    - `input.removeAttribute("disabled")`

## Form Fields
- Can't use `value` attribute to get *current* value
- `input.value`
- Careful if you do addition
- `input.focus()`
- `input.blur()`

## Data Attributes
- Using `data-` attributes (see `data-attr.html`)
- `el.dataset.id`
- `el.dataset.author`
- Use as a last resort, better to get from API


**Exercises:** Use paired programming

[exercises/02/01-dom-manipulation/](../../../exercises/02/01-dom-manipulation/)

- Used throughout the industry, not just for beginners
- Great way to learn
- Work on one machine - take turns
- Don't write anything until you both understand it
