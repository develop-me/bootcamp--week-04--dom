(d => {
    // get the input element
    let text = d.getElementById("text");

    // get the button
    let button = d.getElementById("button");

    // get the output element
    let answer = d.getElementById("answer");

    // palidrome takes a string and returns whether it is a palindrome
    // reverse the given string, compare it to the original
    // if they're the same, it's a palindrome
    let palindrome = string => Array.from(string).reverse().join("") === string;

    // when the button is clicked
    button.addEventListener("click", () => {
        // if its a palindrome set the output text to "Palindrome!"
        // otherwise set it to "Not a palindrome :("
        answer.textContent = palindrome(text.value) ? "Palindrome!" : "Not a palindrome :(";
    });
})(document);
