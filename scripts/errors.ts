const error = document.getElementById("error");

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('autocorrect', 'off');
  input.setAttribute('autocapitalize', 'off');
  input.setAttribute('spellcheck', "false");
});

window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      clearErrorMessage();
    }
});


function setErrorMessage({message}: {message: string}) {
    error.innerHTML = message;
}

function clearErrorMessage() {
    error.innerHTML = "";
}