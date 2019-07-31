(d => {
    let input = d.getElementById("password");
    let strength = d.getElementById("strength");

    input.addEventListener("keyup", () => {
        let password = input.value;

        // remove any classes, so they don't override each other
        input.classList.remove("good", "ok", "bad");

        if (password.length === 0) {
            strength.textContent = "";
            // if length less than 10, add bad class and remove other classes
        } else if (password.length < 10) {
            input.classList.add("bad");
            strength.textContent = "Rubbish";
            // if length less than 18 (but 10 or more), add ok class and remove other classes
        } else if (password.length <= 18) {
            input.classList.add("ok");
            strength.textContent = "Better";
            // if length more than 18, add good class and remove other classes
        } else {
            input.classList.add("good");
            strength.textContent = "Great!";
        }
    });
})(document);
