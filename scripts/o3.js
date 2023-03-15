var submitButton = document.getElementById("guess-button");
var netherGuess = document.getElementById("netherGuess");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    try {
        guessNether();
    }
    catch (error) {
        setErrorMessage({ message: error.message });
    }
});
function guessNether() {
    var guess = Number(netherGuess === null || netherGuess === void 0 ? void 0 : netherGuess.value);
    var actual = 10;
    if (!guess) {
        throw new Error("Geen antwoord ingevuld");
    }
    if (guess !== actual) {
        throw new Error("Fout... probeer opnieuw");
    }
    window.location.href = 'o4.html';
}
//# sourceMappingURL=o3.js.map