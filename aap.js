var input = document.querySelector("#input-txt");
var button = document.querySelector("#btn-translator");
var output = document.querySelector("#output-txt");
var url = "https://api.funtranslations.com/translate/ebonics.json";
function geturl(txt)
{
    return url + "?text=" + txt;
}
 function clickhandler()
{
    var txt = input.value;
     fetch(geturl(txt))
     .then(respones => respones.json())
     .then(json => output.innerText = json.contents.translated);
} 
button.addEventListener("click", clickhandler);
