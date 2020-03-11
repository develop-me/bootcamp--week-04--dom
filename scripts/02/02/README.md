# Day 2: Afternoon

## Creating Elements
- `let p = document.createElement("p")`
- Use `el.append(p)` to add
- Show `01-question.html`/`01-answer.js`
- `el.prepend(p)`
- `el.before(p)`
- `el.after(p)`

## Polyfills
- `append`, `prepend`, `before`, and `after` not supported by some older browsers (quite new)
- Can use the http://github.com/WebReflection/dom4 polyfill to fix this
- A polyfill is a piece of JavaScript that adds missing functionality to older browsers
- Uses "monkey patching"
    - We can use JS to add features to JS, like missing functions/methods
    - Generally not a good idea if it's custom behaviour
    - But great for adding standard behaviour that isn't supported

## Inserting/Moving Elements
- Using `el.append(p)` on element we already have selected: doesn't copy it

## Removing Elements
- Use `el.remove()` to remove from DOM
- Can re-insert later if we keep a reference to it

## Document Fragments
- Every addition redraws the page: CPU intensive task
- If we need to add lots of elements use a Document Fragment
- Demonstrate `document.createDocumentFragment()`

## jQuery
- Explain that jQuery is much tidier
    - Selecting multiple items
    - Position: `.position()` (vs `.offset()`/`.getBoundingClientRect()`)
    - Chaining (e.g. `.text()` `.addClass()`)
