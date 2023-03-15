const submitButton = document.getElementById("guess-button");
const dinoGuess = <HTMLInputElement> document.getElementById("dinoGuess");

submitButton?.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        guessDino();
    } catch (error) {
        setErrorMessage({message: error.message});
    }
});

function guessDino() {
    const guess: string | null = dinoGuess?.value;
    if (!guess || guess.length === 0) {
        throw new Error("Leeg antwoord...");
    }
    if (guess.toLowerCase() !== "bronchosaurus") {
        throw new Error("Fout... probeer opniew");
    }
    window.location.href='o2.html';
}
