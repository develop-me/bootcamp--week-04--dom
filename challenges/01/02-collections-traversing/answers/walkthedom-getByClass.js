(d => {
    let walkTheDOM = el => {
        // get all the children of the current element
        // if it doesn't haven't any children reduce will return [el]
        // if it does it will return an array of all the elements so far
        return Array.from(el.children).reduce((all, el) => {
            return all.concat(walkTheDOM(el));
        }, [el]);
    };

    let getByClass = className => {
        // get all the elements on the page
        // then filter to keep the ones with a matching class
        return walkTheDOM(document.body).filter(el => {
            return el.classList.contains(className);
        });
    };
})(document);
