# The DOM: Creating Elements

---

## Challenges

Create a new `.js` file for each challenge. You may want to put each challenge in a new directory.

**Compare your result with the demo**.

### 01

Using `rhubarb.html`. With JavaScript, add 100 paragraphs to the `<main>` that all say "Rhubarb".

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/02/02-dom-creating/answers/rhubarb/rhubarb.html)

### 02

Using the `colours.html` file. With JavaScript, add a list of all the different colours used by the `<div>`s.

e.g. When it's done:

```html
<h2>The boxes are:</h2>
<ul id="colours">
    <li>aliceblue</li>
    <li>antiquewhite</li>
    ...
    <li>yellowgreen</li>
</ul>
```

**Related**: ["Tomato" versus "#FF6347" - the tragicomic history of CSS colour names](https://arstechnica.com/information-technology/2015/10/tomato-versus-ff6347-the-tragicomic-history-of-css-color-names/)

**Tangentially Related**: [New Paint Colours Invented by Neural Network](http://aiweirdness.com/post/160776374467/new-paint-colors-invented-by-neural-network)

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/02/02-dom-creating/answers/colours/colours.html)

---

## Tricksy

### 03

Using `alphabet.html`. With JavaScript, create a `<ul>` that contains an `<li>` for each letter of the alphabet.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/02/02-dom-creating/answers/alphabet/alphabet.html)

### 04

Using `phobias.html`. With JavaScript, take the following array of strings and list it alphabetically using a list of lists, where each top level list represents a new first letter (see the example below).

```javascript
let strings = [
    "katastichophobia",
    "rhabdophobia",
    "eisoptrophobia",
    "papaphobia",
    "hypegiaphobia",
    "odontophobia",
    "ergophobia",
    "pteronophobia",
    "taphephobia",
    "apiphobia",
];
```

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/02/02-dom-creating/answers/phobias/phobias.html)

### 05

Using `grid.html`. With JavaScript, create a 64×64 grid of `<span>` elements, each one 10px square. The top left corner should have background `rgb(0,0,127)` and the bottom right should have background `rgb(255,255,127)`. The `r` value should go up by 4 with each column and the `g` value should go up by 4 with each row. The `b` value should be fixed at `127`.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/02/02-dom-creating/answers/grid/grid.html)

---

## Über-Tricksy

### 06

Using `canvas.html`. Try and recreate the colour grid above, but [using `<canvas>`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D), only make the grid 256×256 and go up in value by 1 instead of 4.

[Demo](https://htmlpreview.github.io/?https://github.com/develop-me/book-marks/blob/develop/week-04--dom/challenges/02/02-dom-creating/answers/canvas/canvas.html)
