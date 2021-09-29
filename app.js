var btnTranslate = document.querySelector("#translate-btn")
var txtInput = document.querySelector("#translate-input")
var outputDiv = document.querySelector("#output")
console.log(outputDiv)

var serverURL = "https://api.funtranslations.com/translate/dolan.json"

function getTranslateURL (input) {
    return serverURL + "?" + "text=" + input  
}


btnTranslate.addEventListener("click", function clickHandler(){
    

    var inputText = txtInput.value;

    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    
    })

});






