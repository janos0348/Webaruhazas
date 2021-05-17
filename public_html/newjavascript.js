function $(nev) {
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}
function CLASS(nev) {
    return document.getElementByclassName(nev);
}
var TermekekTomb = [];

function kiir() {
    var txt = "<table><th>ID</th><th>Terméknév</th><th>Ár</th><th>Pénznem</th><th>Kategória</th><th>Button</th>";
    for (var i = 0; i < TermekekTomb.length; i++) {
        txt += "<tr>";
        for (var item in TermekekTomb[i]) {
            txt += "<td>" + TermekekTomb[i][item] + "</td>";
        }
        txt += "<td>" + "<button type='button'>TÖRÖL!</button>" + "</td>";
        txt += "</tr>";
    }
    txt += "</table>";
    $('article')[0].innerHTML = txt;
    txt += '  <form >'+
  '<label for="ID">ID:</label>' +
  '<input type="text" id="ID" name="ID"><br><br>'+
  '<label for="nev">Név:</label>'+
  '<input type="text" id="nev" name="nev"><br><br>'+
   ' <label for="ar">Ár:</label>'+
  '<input type="text" id="ar" name="ar"><br><br>'+
  '<label for="pnznem">Pénznem:</label>'+
  '<input type="text" id="pnznem" name="pnznem"><br><br>'+
   ' <label for="ktgr">Kategória:</label>'+
  '<input type="text" id="ktgr" name="ktgr"><br><br>'+
  '<input type="submit" value="OK">'
+'</form>';

    $('article')[0].innerHTML = txt;
}
function kiir2() {
     var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            TermekekTomb = JSON.parse(xhttp.responseText).termekek;
            console.log(TermekekTomb);
            kiir();
        }
    };


    xhttp.open("GET", "termekek.json", true);
    xhttp.send();

}


function init(){
    kiir2();
    
    
}



window.addEventListener('load', init, false);
