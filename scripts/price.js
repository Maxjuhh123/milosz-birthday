var priceButton = document.getElementById("price-button");
var bigDiv = document.getElementsByClassName("center-container")[0];
priceButton.addEventListener("click", function (e) {
    e.preventDefault();
    revealPrice();
});
function revealPrice() {
    bigDiv.removeChild(priceButton);
    var priceImage = document.createElement("img");
    priceImage.setAttribute("src", "../images/price.jpg");
    var priceText = document.createElement("p");
    priceText.innerText = "De code die je op de xbox store kan invullen krijg je zo van mij.";
    var priceDiv = document.createElement("div");
    var extraText = document.createElement("p");
    extraText.innerText = "Maar dat is niet alles. Als je het leuk vindt wil ik je ook een beetje leren programmeren als je eenmaal je computer hebt. Dan kun je ook coole websites zoals deze maken... en nog veel meer!";
    priceDiv.appendChild(priceImage);
    priceDiv.appendChild(priceText);
    priceDiv.appendChild(extraText);
    priceDiv.setAttribute("class", "item-container");
    bigDiv.appendChild(priceDiv);
}
//# sourceMappingURL=price.js.map