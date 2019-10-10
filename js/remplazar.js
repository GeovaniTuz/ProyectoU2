function remp() {
    var st = document.getElementById("fileOutput").innerHTML;
     var txto = st.replace(/(([^(<)])([!])([-])([-]))([a-zA-z]+)([^(-->)]*)/ig,"");
    document.getElementById("rempla").innerHTML = txto;
}
//elimincacion de comentarios.