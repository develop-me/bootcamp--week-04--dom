(d => {
    // accept the class and selector
    let addClassTo = (className, selector) => {
        // get the element from the DOM
        let el = d.querySelect(selector);

        // if the element exists
        if (el !== null) {
            // add the relevant class
            el.classList.add(className);
        }

        // return the element
        return el;
    }

    // accept the class and selector
    let removeClassFrom = (className, selector) => {
        // get the element from the DOM
        let el = d.querySelect(selector);

        // if the element exists
        if (el !== null) {
            // remove the relevant class
            el.classList.remove(className);
        }

        // return the element
        return el;
    }

    // a function to get a list of selectors
    // map over the array of selectors to get each one from the DOM
    // filter out any that aren't valid
    let getElements = selectors => selectors.map(selector => d.querySelector(selector))
                                            .filter(el => el !== null);

    // accept an array of classes and an array of selectors
    let addClassesTo = (classes, selectors) => {
        // use the getElements function
        let els = getElements(selectors);

        // for each element
        els.forEach(el => {
            // for each class add to this element
            classes.forEach(className => el.classList.add(className));
        });

        // return the list of elements
        return els;
    }

    // accept an array of classes and an array of selectors
    let removeClassesFrom = (classes, selectors) => {
        // use the getElements function
        let els = getElements(selectors);

        // for each element
        els.forEach(el => {
            // for each class remove from this element
            classes.forEach(className => el.classList.remove(className));
        });

        // return the list of elements
        return els;
    }
})(document);
