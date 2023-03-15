const priceButton = document.getElementById("price-button");
const bigDiv = document.getElementsByClassName("center-container")[0];

const xbox_code = "XXXX-XXXX";

priceButton.addEventListener("click", (e) => {
    e.preventDefault();
    revealPrice();
});

function revealPrice() {
    bigDiv.removeChild(priceButton);
    const priceImage = document.createElement("img");
    priceImage.setAttribute("src", "../images/price.jpg");
    const priceText = document.createElement("p");
    priceText.innerText = `De code voor de xbox-store is: ${xbox_code}`;
    const priceDiv = document.createElement("div");
    const extraText = document.createElement("p");
    extraText.innerText = "Maar dat is niet alles. Als je het leuk vindt wil ik je ook een beetje leren programmeren als je eenmaal je computer hebt. Dan kun je ook coole websites zoals deze maken... en nog veel meer!";
    priceDiv.appendChild(priceImage);
    priceDiv.appendChild(priceText);
    priceDiv.appendChild(extraText);
    priceDiv.setAttribute("class", "item-container");
    bigDiv.appendChild(priceDiv);

}