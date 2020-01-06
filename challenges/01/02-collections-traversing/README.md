# Collections

## Challenges

**Compare your result with the demo**.

### 01

In your existing `selectors.js`:

1. Add a class `list-group-item` to each item in the first list in the main block

    **Hint**: you should already have a variable containing the first list

2. Update it to not use any `querySelector...` methods - do not edit the HTML! (Don't worry about updating your `selectors-functions.js` file)

    **Hint**: remember that `document.getElementsByClassName` returns a collection!

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/challenges/01/02-collections-traversing/answers/selectors/selectors.html)

---

You should create a new `.js` file for each of the challenges below. It might be a good idea to have one directory per challenge.

### 02

Using JavaScript, add a class of `list-group-item` to each item in the list in `list.html`.

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/challenges/01/02-collections-traversing/answers/list/list.html)

### 03

Using JavaScript, add a class of `alternate` to every other row in the table in `table.html`. You're not allowed to use `querySelector...` methods.

**Hint**: remember that the array iterator methods pass in the current index as an argument

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/challenges/01/02-collections-traversing/answers/table/table.html)


### 04

Use JavaScript to add a class of `redacted` to every paragraph that contains the phrase "secret moon base" in `redacted.html`

*Hint*: if you get the `.textContent` property of an element you'll get back its text as a string. You can search a string to see if it contains another string by using the string `.search("find this")` method - it will return `-1` if it **isn't** found

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/challenges/01/02-collections-traversing/answers/redacted/redacted.html)

---

## Tricksy

### 05

In `items.html`, use JavaScript to add a class of `col-x` where `x` is the column that the item should appear in if it's in a four by four grid and add a class of `row-y`, where `y` represents the current row the item should appear on.

e.g. the first item would have the class `col-1 row-1`, the second `col-2 row-1`, the fifth `col-1 row-2`

If the CSS classes existed, your code should work for *any* size grid.

*Hint*: You'll need to round some numbers, you can use `Math.ceil()` or `Math.floor()` to do this:

```javascript
// Math.ceil() rounds up
Math.ceil(2.3); // 3
Math.ceil(2.7); // 3

// Math.floor() round down
Math.floor(2.3); // 2
Math.floor(2.7); // 2
```

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/challenges/01/02-collections-traversing/answers/items/items.html)

### 06

Write a function `walkTheDOM()` that you pass an element (e.g. `document.body`) and it returns a flat array containing every single element on the page. Recursion can be very handy for this!

e.g. Given the following HTML:

```html
<body>
    <header>
        <h1>Blah</h1>
    </header>

    <main>
        <p>Blah blah blah<p>
        <ul>
            <li><a href="/">Blah</a></li>
            <li>Blah</li>
        </ul>
    </main>
</body>
```

Calling `walkTheDOM(document.body)` would return:

```javascript
[<body>, <header>, <h1>, <main>, <p>, <ul>, <li>, <a>, <li>]
```

### 07

Using your `walkTheDOM` function try writing your own version of the `document.getElementsByClassName` function, i.e. a function that returns all elements on the page that match a given `class` name. It can just return an array (not an `HTMLCollection`). Call your version `getByClass`.

**Hint**: You'll probably want to read the [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) documentation
