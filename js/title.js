function titulo(){
var str = document.getElementById("fileOutput").innerHTML;
var txt = str.match(/((title)([^>]))([a-zA-z]+)([^</>]*)/g);
document.getElementById("titulo").innerHTML = txt;

}
//[^<>]+|<(\/?)([A-Za-z]+)([^</>]*)>/g