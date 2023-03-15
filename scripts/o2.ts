const submitButton = document.getElementById("guess-button");
const dogGuess = <HTMLInputElement> document.getElementById("dogGuess");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        guessDog();
    } catch(error) {
        setErrorMessage({message: error.message});
    }
});

function guessDog() {
    const guess: number | null = Number(dogGuess?.value);
    const actual = 24;
    if(!guess) {
        throw new Error("Geen getal ingevuld");
    }
    if(guess !== actual) {
        throw new Error("Fout... probeer opnieuw");
    }
    window.location.href='o3.html';
}