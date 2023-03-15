var error = document.getElementById("error");
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', "false");
});
window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        clearErrorMessage();
    }
});
function setErrorMessage(_a) {
    var message = _a.message;
    error.innerHTML = message;
}
function clearErrorMessage() {
    error.innerHTML = "";
}
//# sourceMappingURL=errors.js.map