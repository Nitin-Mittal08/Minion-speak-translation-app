//var userName = prompt("What is your name?")
//alert("External JS is working too "+ userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv  = document.querySelector("#output")
btnTranslate.addEventListener("click", function clickEventHandler(){
    outputDiv.innerText = "translated " + txtInput.value;
});


