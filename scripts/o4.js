var submitButton = document.getElementById("guess-button");
var nameGuess = document.getElementById("nameGuess");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    try {
        guessName();
    }
    catch (error) {
        setErrorMessage({ message: error.message });
    }
});
function guessName() {
    var guess = nameGuess === null || nameGuess === void 0 ? void 0 : nameGuess.value.toLowerCase();
    var actual = "eduard";
    if (!guess) {
        throw new Error("Geen antwoord ingevuld");
    }
    if (guess !== actual) {
        throw new Error("Fout... probeer opnieuw");
    }
    window.location.href = 'o5.html';
}
//# sourceMappingURL=o4.js.map