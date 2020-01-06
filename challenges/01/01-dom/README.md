# The DOM

## Challenge

### 01

Save the `selectors.html` file in a new directory and open it in your text editor.

Create a new `.js` file called `selectors.js` and link to it using a `<script>` tag. Make sure you use an IIFE to wrap your JS code.

Now, **without editing the HTML**, use JavaScript to:

- Add a class `container` to the `<body>` tag
- Add a class `col-md-12` to the header
- Add a class `col-md-4` to the sidebar
- Add a class `col-md-8` to the main block
- Add a class `lead` to the first paragraph of the main block
- Add a class `list-group` to the first list in the main block
- Add a class `pagination` to the second list in the main block

Check the browser every time you add a class to make sure it's working. You'll need to make sure the browser window is wide enough for some of the CSS to have an effect.

**Compare your result with the demo**.

You can use the JS console in Firefox to check your selectors work if you're having issues.

*This is not a realistic situation, as you'd generally add the classes straight to the HTML, but we need to learn about Events before we can use it practicallly.*

[Demo](https://develop-me.github.io/bootcamp--week-04--dom/challenges/01/01-dom/answers/selectors.html)

---

Add another file `selectors-functions.js` to your `selectors.html` and then create the following functions:

### 02

Create a function `addClassTo` that takes two strings as arguments. The first argument represents an HTML `class` name and the second is a valid selector. When you run the function it should add the `class` to the element and return the element. Make sure it doesn't throw an error even if the selector given is invalid.

**Note**: the `classList` methods don't return anything useful

```javascript
// your function here

let addedEl = addClassTo("col-md-12", ".js__first-list");
console.log(addedEl); // the <ul> - should have the new class

let addNoError = addClassTo("col-md-12", ".js__first-list-eek");
console.log(addNoError); // null
```

### 03

Create a function `removeClassFrom` that takes two strings as arguments. The first argument represents an HTML `class` name and the second is a valid selector. When you run the function it should remove the `class` from the element and return the element. Make sure it doesn't throw an error even if the selector given is invalid.

**Note**: the `classList` methods don't return anything useful

```javascript
// your function here

let removedEl = removeClassFrom("col-md-12", ".js__first-list");
console.log(removedEl); // the <ul> - should have removed the class

let removeNoError = removeClassFrom("col-md-12", ".js__first-list-eek");
console.log(removeNoError); null
```

---

## Tricksy

### 04

Create a function `addClassesTo` that takes two arrays as arguments. The first argument represents HTML `class` names and the second is valid selectors. When you run the function it should add all the `class` names to all the elements and return an array of the elements. Make sure it doesn't throw an error even if the selector given is invalid.


```javascript
// your function here

let addedEls = addClassesTo(["col-md-12", "list-group"], [".js__first-list", ".js__second-list"]);
console.log(addedEls); // the two <ul> elements - should have the new classes
```

### 05

Create a function `removeClassesFrom` that takes two arrays as arguments. The first argument represents HTML `class` names and the second is valid selectors. When you run the function it should remove the `class` names from all the element and return an array of the elements. Make sure it doesn't throw an error even if the selector given is invalid.

```javascript
// your function here

let removedEls = removeClassesFrom(["col-md-12", "list-group"], [".js__first-list", ".js__second-list"]);
console.log(removedEls); // the two <ul> elements - should have removed the classes
```

---

## Über-Tricksy

### 06

Update the previous four functions so that they **cache** the elements that have been selected.

For example, currently if you run `addClassTo` multiple times but use the same selector (say, `.js__first-list`), every time you run it it will search the whole DOM to find the element - which is very inefficient. If you store the result of the selector the first time, then the second time it is used you could reuse the stored value, rather than searching the DOM a second time.

- First, try and get it working so it just caches the last selector you passed in, then if you use the same selector twice in a row it will be more efficient.

- Second, try and get it working so that it caches *all* the selectors that you pass in, so that any repeated selectors will be more efficient.
