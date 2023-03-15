var submitButton = document.getElementById("guess-button");
var dogGuess = document.getElementById("dogGuess");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    try {
        guessDog();
    }
    catch (error) {
        setErrorMessage({ message: error.message });
    }
});
function guessDog() {
    var guess = Number(dogGuess === null || dogGuess === void 0 ? void 0 : dogGuess.value);
    var actual = 24;
    if (!guess) {
        throw new Error("Geen getal ingevuld");
    }
    if (guess !== actual) {
        throw new Error("Fout... probeer opnieuw");
    }
    window.location.href = 'o3.html';
}
//# sourceMappingURL=o2.js.map