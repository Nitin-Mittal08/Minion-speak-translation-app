//var userName = prompt("What is your name?")
//alert("External JS is working too "+ userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked!");
    console.log(txtInput.value);
});


