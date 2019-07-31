# Day 1: Morning

## Intro
- Structure of week
    - Selecting
    - Manipulation
    - Events
- Structure of day
    - Selecting single items
    - Selecting multiple items
- JS in browser is just JS plus some extra stuff - don't forget it's just JS


## `<script>` tag
- Need to use a `<script>` tag
- Bottom of the page
- Inline and external
- `defer`
    - Loads file in background, runs once everything else has run
    - `async`: Loads file in background, runs once it loads
- Use developer tools console to check it's worked

## Browser Behaviour
- Loads scripts tags in order
- Refreshing page starts from scratch

## Developer Tools
- Always keep open
- Demonstrate using console logging
- Demonstrate errors

## Global Scope and IIFEs
- Avoiding global scope
- `top` variable example - see `app.js`
- Wrap in `start` function - still creating a variable
- Use IIFE

---

# The DOM

## The document object
- How can JS talk to the browser? Functions, variables
- Document Object Model: why the name?
- Demonstrate the `document` global variable
- `document.documentElement`, `document.body`, `document.head`
- All `HTMLElement` object instances

## Getting Individual Elements
- `document.getElementById()`
- Demonstrate getting `null` back
- `document.querySelector()` - any CSS selector
    - Performance issues with `.querySelector()`

## Storing Elements
- Use a variable to store an element

## IIFEs with Arguments
- Demonstrate passing `document` into IIFE

## Adding/Removing Classes
- `el.classList.add("class")`
- `el.classList.remove("class")`
- Multiple classes: `el.classList.add("class1", "class2")`
- `classList` methods don't return a useful value
