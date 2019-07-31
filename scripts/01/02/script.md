# Day 1: Afternoon

## Collections

### Selecting Multiple Elements
- Sometimes we need to select multiple elements
- HTMLCollection: `document.getElementsByClassName()` and `document.getElementsByTagName()`
- NodeList: `document.querySelectorAll()`

### Working With NodeList/HTMLCollection
- Array-like objects: indexed, `els.forEach()`
- Odd performance at times
- Using `Array.from()` - can then use `els.map()`, `els.filter()`, `els.reduce()`

### `forEach` to Work WIth
- Using `.forEach()` to add a class

### ID, Classes, Prefix
- ID best for performance
- Classes slower, but needed for recurring items
- Should use a `js__` prefix

---

## Traversing the DOM

### Relationships
- DOM is a **tree** structure (See `tree.html`)
- Parent, Child, Siblings

### Traversing
- Element properties
    - `el.firstElementChild`
    - `el.parentElement`
    - `el.nextElementSibling`
    - `el.previousElementSibling`
    - `el.children` (use `Array.from(el.children)`)
- Wordy because of text nodes

### Selecting Children
- Demonstrate using `el.getElementsByClassName()`, `el.getElementsByTagName()`, etc. on a selected element
