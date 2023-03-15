var submitButton = document.getElementById("guess-button");
var dinoGuess = document.getElementById("dinoGuess");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    try {
        guessDino();
    }
    catch (error) {
        setErrorMessage({ message: error.message });
    }
});
function guessDino() {
    var guess = dinoGuess === null || dinoGuess === void 0 ? void 0 : dinoGuess.value;
    if (!guess || guess.length === 0) {
        throw new Error("Leeg antwoord...");
    }
    if (guess.toLowerCase() !== "bronchosaurus") {
        throw new Error("Fout... probeer opniew");
    }
    window.location.href = 'o2.html';
}
//# sourceMappingURL=o1.js.map