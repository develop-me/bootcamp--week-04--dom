(d => {
    // The konami code stuff

    // keep track of last buttons pressed
    let history = [];

    // a string of the correct key press sequence
    let joined = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";

    // when a key is pressed
    window.addEventListener("keydown", event => {
        // push the key into the history array
        history.push(event.key);
        // only keep the last 10 keys
        history = history.slice(-10);

        // check to see if the key sequence matches
        if (history.join(",") === joined) {
            // if it does do the mad code below
            // yours can do something less crazy
            go();
        }
    });

    /*
     * The code below does the silliness
     * You shouldn't try and write this
     * Think of something else!
     */

    /*===================================================================*/

    /*
     * Seriously, don't look at this
     */

    let go = () => {
        let walkTheDOM = el => {
            return Array.from(el.children).reduce((all, el) => {
                return all.concat(walkTheDOM(el));
            }, [el]);
        };

        let els = walkTheDOM(document.body).filter(el => !el.children.length);

        let items = els.reduce((acc, el) => {
            let fragment = d.createDocumentFragment();
            let letters = el.textContent.split(/(\s+)/);
            el.textContent = "";

            letters.forEach(letter => {
                let s = document.createElement("span");
                s.textContent = letter;
                s.style.display = "inline-block";
                s.style.minWidth = "0.28em";
                acc.push({
                    el: s,
                    x: (Math.random() * 20) * (Math.random() < 0.5 ? -1 : 1),
                    y: (Math.random() * 22 + 5) * (Math.random() < 0.5 ? -1 : 1),
                });
                fragment.append(s);
            });

            el.append(fragment);
            return acc;
        }, []);

        let last = 0;
        let t = 0;

        let loop = time => {
            requestAnimationFrame(loop);

            let dt = time - last;
            last = time;

            if (dt > 1000) {
                return;
            }

            t += dt / 60;

            for (let i = 0; i < items.length; i += 1) {
                let y = Math.pow(t - Math.abs(items[i].y), 2) - Math.pow(items[i].y, 2);
                let x = items[i].x * t;
                items[i].el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        loop(0);
    };
})(document);
