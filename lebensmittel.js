function hiNzufugen() {
  if (document.pherechner.phe.value.length === 0) {
    alert("Keinen Wert eingetragen!");
    return false;
  }
  if (document.pherechner.name.value.length === 0) {
    alert("Kein Name eingetragen!");
    return false;
  }

  var r = confirm("Zum Lebensmittelspeicher hinzufügen?");
  if (r === true) {
    var name = document.pherechner.name.value.replace(/\s+/g, "_");
    var phe = parseFloat(document.pherechner.phe.value.replace(",", "."));

    if (document.getElementById("select").value == "phe") {
      var ergebnis1 = phe;
      if (localStorage.getItem("array") !== null) {
        var larrayy = [name, ergebnis1.toFixed(2)];
        var parray = JSON.parse(localStorage.getItem("array"));
        parray.push(larrayy);
        localStorage.setItem("array", JSON.stringify(parray));
        var lebensmittell = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML = "";
        for (var i = 0; i < lebensmittell.length; i++) {
          document.getElementById("lebensmittel").innerHTML +=
            '<a href="index.html" class="plan"><span class="bold">' +
            lebensmittell[i].toString().replace(",", ":</span> ") +
            " Phe</a>";
        }
      } else {
        var larray = [name, ergebnis1.toFixed(2)];
        var lmarray = [larray];
        localStorage.setItem("array", JSON.stringify(lmarray));
        var lebensmittel = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML =
          '<a href="index.html" class="plan"><span class="bold">' +
          lebensmittel[0].toString().replace(",", ":</span> ") +
          " Phe</a>";
      }
    } else if (document.getElementById("select").value == "eiwo") {
      var ergebnis2 = phe * 30;
      if (localStorage.getItem("array") !== null) {
        var larrayy2 = [name, ergebnis2.toFixed(2)];
        var parray2 = JSON.parse(localStorage.getItem("array"));
        parray2.push(larrayy2);
        localStorage.setItem("array", JSON.stringify(parray2));
        var lebensmittell2 = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML = "";
        for (var i = 0; i < lebensmittell2.length; i++) {
          document.getElementById("lebensmittel").innerHTML +=
            '<a href="index.html" class="plan"><span class="bold">' +
            lebensmittell2[i].toString().replace(",", ":</span> ") +
            " Phe</a>";
        }
      } else {
        var larray2 = [name, ergebnis2.toFixed(2)];
        var lmarray2 = [larray2];
        localStorage.setItem("array", JSON.stringify(lmarray2));
        var lebensmittel2 = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML =
          '<a href="index.html" class="plan"><span class="bold">' +
          lebensmittel2[0].toString().replace(",", ":</span> ") +
          " Phe</a>";
      }
    } else if (document.getElementById("select").value == "eiwg") {
      var ergebnis3 = phe * 40;
      if (localStorage.getItem("array") !== null) {
        var larrayy3 = [name, ergebnis3.toFixed(2)];
        var parray3 = JSON.parse(localStorage.getItem("array"));
        parray3.push(larrayy3);
        localStorage.setItem("array", JSON.stringify(parray3));
        var lebensmittell3 = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML = "";
        for (var i = 0; i < lebensmittell3.length; i++) {
          document.getElementById("lebensmittel").innerHTML +=
            '<a href="index.html" class="plan"><span class="bold">' +
            lebensmittell3[i].toString().replace(",", ":</span> ") +
            " Phe</a>";
        }
      } else {
        var larray3 = [name, ergebnis3.toFixed(2)];
        var lmarray3 = [larray3];
        localStorage.setItem("array", JSON.stringify(lmarray3));
        var lebensmittel3 = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML =
          '<a href="index.html" class="plan"><span class="bold">' +
          lebensmittel3[0].toString().replace(",", ":</span> ") +
          " Phe</a>";
      }
    } else if (document.getElementById("select").value == "eiws") {
      var ergebnis4 = phe * 50;
      if (localStorage.getItem("array") !== null) {
        var larrayy4 = [name, ergebnis4.toFixed(2)];
        var parray4 = JSON.parse(localStorage.getItem("array"));
        parray4.push(larrayy4);
        localStorage.setItem("array", JSON.stringify(parray4));
        var lebensmittell4 = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML = "";
        for (var i = 0; i < lebensmittell4.length; i++) {
          document.getElementById("lebensmittel").innerHTML +=
            '<a href="index.html" class="plan"><span class="bold">' +
            lebensmittell4[i].toString().replace(",", ":</span> ") +
            " Phe</a>";
        }
      } else {
        var larray4 = [name, ergebnis4.toFixed(2)];
        var lmarray4 = [larray4];
        localStorage.setItem("array", JSON.stringify(lmarray4));
        var lebensmittel4 = JSON.parse(localStorage.getItem("array"));
        document.getElementById("lebensmittel").innerHTML =
          '<a href="index.html" class="plan"><span class="bold">' +
          lebensmittel4[0].toString().replace(",", ":</span> ") +
          " Phe</a>";
      }
    }
  } else {
  }
}

function derSpeicher(event) {
  var lmlink = event.target.innerText;
  var lmarray = lmlink.split(" ");
  lmarray.pop();
  localStorage.setItem("lebensmittel", JSON.stringify(lmarray));
}

function tagListereset() {
  var r = confirm("Lebensmittelspeicher zurücksetzen?");
  if (r === true) {
    localStorage.removeItem("array");
    localStorage.removeItem("lebensmittel");
    document.getElementById("lebensmittel").innerHTML = "0 Lebensmittel";
  } else {
  }
}

function koMma() {
  if (document.pherechner.phe.value.length === 0) {
    document.pherechner.phe.value += "0.";
  } else {
    document.pherechner.phe.value += ".";
  }
}

if (localStorage.getItem("array") !== null) {
  var lebensmittelll = JSON.parse(localStorage.getItem("array"));
  document.getElementById("lebensmittel").innerHTML = "";
  for (var i = 0; i < lebensmittelll.length; i++) {
    document.getElementById("lebensmittel").innerHTML +=
      '<a href="index.html" class="plan"><span class="bold">' +
      lebensmittelll[i].toString().replace(",", ":</span> ") +
      " Phe</a>";
  }
} else {
  document.getElementById("lebensmittel").innerHTML = "0 Lebensmittel";
}

function mGg() {
  if (document.getElementById("select").value == "phe") {
    document.getElementById("mgg").innerHTML = "mg";
  } else if (document.getElementById("select").value == "eiwo") {
    document.getElementById("mgg").innerHTML = "g";
  } else if (document.getElementById("select").value == "eiwg") {
    document.getElementById("mgg").innerHTML = "g";
  } else if (document.getElementById("select").value == "eiws") {
    document.getElementById("mgg").innerHTML = "g";
  }
}
