const submitButton = document.getElementById("guess-button");
const netherGuess = <HTMLInputElement> document.getElementById("netherGuess");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        guessNether();
    } catch(error) {
        setErrorMessage({message: error.message});
    }
});

function guessNether() {
    const guess: number | null = Number(netherGuess?.value);
    const actual = 10;
    if(!guess) {
        throw new Error("Geen antwoord ingevuld");
    }
    if(guess !== actual) {
        throw new Error("Fout... probeer opnieuw");
    }
    window.location.href='o4.html';
}