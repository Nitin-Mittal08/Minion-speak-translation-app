//var userName = prompt("What is your name?")
//alert("External JS is working too "+ userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv  = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
}
btnTranslate.addEventListener("click", function clickEventHandler(){
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(input => outputDiv.innerText= input.contents.translated)
    .catch(errorHandler);
    
});


