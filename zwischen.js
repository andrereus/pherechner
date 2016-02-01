function hiNzufugen() {
if (document.pherechner.phe.value.length === 0) {
  alert("Keinen Gewicht eingetragen!");
  return false;
  }
if (document.pherechner.name.value.length === 0) {
  alert("Kein Name eingetragen!");
  return false;
  }

var r=confirm("Zum Zwischenspeicher hinzufügen?");
if (r===true) {
var name = document.pherechner.name.value.replace(/\s+/g,"_");
var phe = parseFloat(document.pherechner.phe.value.replace(",","."));
var ergebnis1 = phe;
  if (localStorage.getItem("zwarray") !== null) {
    var larrayy = [name, ergebnis1.toFixed(2)];
    var parray = JSON.parse(localStorage.getItem("zwarray"));
    parray.push(larrayy);
    localStorage.setItem("zwarray", JSON.stringify(parray));
    var lebensmittell = JSON.parse(localStorage.getItem("zwarray"));
    document.getElementById("lebensmittel").innerHTML = "";
    for (var i=0;i<lebensmittell.length;i++) {
      document.getElementById("lebensmittel").innerHTML += "<a href=\"index.html\" class=\"plan\"><span class=\"bold\">"+
        lebensmittell[i].toString().replace ( ",", ":</span> " )
      +" Gramm</a>";
    }
  } else {
    var larray = [name, ergebnis1.toFixed(2)];
    var lmarray = [larray];
    localStorage.setItem("zwarray", JSON.stringify(lmarray));
    var lebensmittel = JSON.parse(localStorage.getItem("zwarray"));
    document.getElementById("lebensmittel").innerHTML="<a href=\"index.html\" class=\"plan\"><span class=\"bold\">"+
    lebensmittel[0].toString().replace ( ",", ":</span> " )
    +" Gramm</a>";
  }
} else {} }

function derSpeicher(event) {
  var lmlink = event.target.innerText;
  var lmarray = lmlink.split(' ');
  lmarray.pop();
  localStorage.setItem("zwlebensmittel", JSON.stringify(lmarray));
}

function tagListereset() {
var r=confirm("Zwischenspeicher zurücksetzen?");
if (r===true) {
localStorage.removeItem("zwarray");
localStorage.removeItem("zwlebensmittel");
document.getElementById("lebensmittel").innerHTML="0 Lebensmittel";
} else {} }

function koMma() {
  if (document.pherechner.phe.value.length === 0) {
    document.pherechner.phe.value += "0.";
  } else {
    document.pherechner.phe.value += ".";
  }
}

  if (localStorage.getItem("zwarray") !== null) {
    var lebensmittelll = JSON.parse(localStorage.getItem("zwarray"));
    document.getElementById("lebensmittel").innerHTML = "";
    for (var i=0;i<lebensmittelll.length;i++) {
      document.getElementById("lebensmittel").innerHTML += "<a href=\"index.html\" class=\"plan\"><span class=\"bold\">"+
        lebensmittelll[i].toString().replace ( ",", ":</span> " )
      +" Gramm</a>";
    }
  } else {
    document.getElementById("lebensmittel").innerHTML="0 Lebensmittel";
  }