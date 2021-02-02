# The DOM

---

The instructor should have put you into pairs for these exercises. If they've forgotten, please remind them before you get started!

## Exercises

Create a new `.js` file for each exercise. You may want to put each exercise in a new directory.

**Compare your result with the demo**.

### 01

Using the `border.html` file. With JavaScript, make the border of the square turn red.

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/exercises/03-dom-manipulation/answers/border/border.html)

### 02

Using the `image.html` file. With JavaScript, make the kitten twice as big. *Do not hard-code the height and width of the specific image. It should work for any size of image.*

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/exercises/03-dom-manipulation/answers/image/image.html)

### 03
Using the `time.html` file. Update the `#time` paragraph to display the time (in HH:MM:SS format) when the page loads. (It doesn't need to update - unless you fancy a challenge - see [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrworkerGlobalScope/setInterval) if you do). You'll need to look at the [JavaScript documentation for `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

- [Demo](https://develop-me.github.io/bootcamp--week-04--dom/exercises/03-dom-manipulation/answers/time/time.html)
- [Demo (with `setInterval`)](https://develop-me.github.io/bootcamp--week-04--dom/exercises/03-dom-manipulation/answers/time/time-setInterval.html)

## 04

Using the `size.html` file. Update the `#width` and `#height` `<span>`s to show the width and height of the viewport when the page loads.

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/exercises/03-dom-manipulation/answers/size/size.html)

---

## Tricksy

### 05

Using the `items.html` file. Using just JavaScript, when the page loads the items should form a 5x5 grid.

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/exercises/03-dom-manipulation/answers/items/items.html)

### 06

The following code will run as close to 60 times per second as possible. We can use this to animate things smoothly (at 60 frames per second). This is an example of an infinite loop that's actually very useful.

```javascript
let last = 0;

let loop = time => {
    let dt = time - last;
    last = time;
    console.log("Total time:", time, "Time since last loop", dt);

    // animation code here

    requestAnimationFrame(loop);
};

loop(0);
```

In `transition.html` use just JavaScript, make it so that the background colour gradually transitions between different colours.

**Hint**: [template literal string substitution](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings#string_substitution) might come in handy

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/exercises/03-dom-manipulation/answers/transition/transition.html)
