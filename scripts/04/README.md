# Day 4

## The Event Object
- Show the event object
- Using `e` as the parameter is fine
- Various bits of info:
    - the key pressed (`e.key`)
    - mouse coordinates (`e.clientX`, `e.clientY`)
    - `e.type`

## Prevent Default
- Default behaviour often takes you to new page (form submit, link click)
- `e.preventDefault()` stops the default behaviour

## Bubbling
- Events fire whether you're listening or not
- Events bubble up the DOM
- Use `e.target` to find out which element the event originated from.
- Delegation: listen on the parent, use conditional (e.g. `target.tagName === "A"`)
- Demonstrate delegation working with new elements
- `el.matches("css-selector")`: only checking one element, so ok performance
- `event.path || event.composedPath()`: using `.some()` to find if parent matches (check for `.matches` property on each element)

## `.removeEventListener()`

- Sometimes useful to remove event listeners
- e.g. counter that stops at 10
- Memory usage issues if don't remove event listeners
