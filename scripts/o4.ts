const submitButton = document.getElementById("guess-button");
const nameGuess = <HTMLInputElement> document.getElementById("nameGuess");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        guessName();
    } catch(error) {
        setErrorMessage({message: error.message});
    }
});

function guessName() {
    const guess: string | null = nameGuess?.value.toLowerCase();
    const actual = "eduard";
    if(!guess) {
        throw new Error("Geen antwoord ingevuld");
    }
    if(guess !== actual) {
        throw new Error("Fout... probeer opnieuw");
    }
    window.location.href='o5.html';
}