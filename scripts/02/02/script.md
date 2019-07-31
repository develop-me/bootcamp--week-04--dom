# Day 2: Afternoon

## Creating Elements
- `let p = document.createElement("p")`
- Use `el.append(p)` to add
- Show `01-question.html`/`01-answer.js`
- `el.prepend(p)`
- `el.before(p)`
- `el.after(p)`
- Polyfills: WebReflection/dom4

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
