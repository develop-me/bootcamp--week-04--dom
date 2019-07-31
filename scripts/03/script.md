# Day 3

## Event Driven Programming
- Interactive programs different from procedural
- Almost everything is a response to an event
    - page loading
    - using clicking something
    - moving mouse
    - scrolling
- What other sort of events?

## Events
- Respond to a user's actions.
- `el.addEventListener(fn)`: fired when an event is triggered
- Pass it a function to run when the event happens
- Lots of event types:
    - `keydown`: when a key is pressed down
    - `keyup`: when the key is released
    - `click`: when the element is clicked
    - `mousedown`: when the mouse is pressed down
    - `mouseup`: when it comes back up again
    - `focus`/`blur`: when a form field gets/loses focus
    - `change`/`input`: fires when a form input changes
    - `submit`: fired on submitting a form
- MDN has a full list
- Some events are element specific (e.g. `submit`, `focus`)

## Window Events
- `window.addEventListener("scroll", fn)`
- `window.addEventListener("resize", fn)`
- How could you detect the direction a user is scrolling in?

## State
- Events create a sort of loop
- Event handlers are **short-lived**
- Your main application code is (comparatively) **long-lived**
- Use variables that live *outside* our event handlers to track changes
- This is **state**
- Use state over querying the DOM whenever you can
    - Use variables
    - You know initial values of everything
