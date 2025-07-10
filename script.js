function beRechnen() {
  if (document.pherechner.phe.value.length === 0) {
    document.getElementById("ergebnis").innerHTML = "0";
    document.getElementById("preview").style.width = "0%";
    return false;
  }
  if (document.pherechner.gewicht.value.length === 0) {
    document.getElementById("ergebnis").innerHTML = "0";
    document.getElementById("preview").style.width = "0%";
    return false;
  }

  var phe = parseFloat(document.pherechner.phe.value.replace(",", "."));
  var gewicht = parseFloat(document.pherechner.gewicht.value.replace(",", "."));

  if (document.getElementById("select").value == "phe") {
    var ergebnis1 = (gewicht * phe) / 100;
    document.getElementById("ergebnis").innerHTML = ergebnis1.toFixed(2);

    if (localStorage.getItem("gesamt") !== null && localStorage.getItem("toleranz") !== null) {
      var previewgesamt = localStorage.getItem("gesamt");
      var previewtoleranz = localStorage.getItem("toleranz");
      var newgesamt = parseInt(previewgesamt) + parseInt(ergebnis1);
      var previewergebnis = (newgesamt * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    } else {
      var previewtoleranz = localStorage.getItem("toleranz");
      var previewergebnis = (ergebnis1 * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    }
  } else if (document.getElementById("select").value == "eiwo") {
    var ergebnis2 = (gewicht * (phe * 30)) / 100;
    document.getElementById("ergebnis").innerHTML = ergebnis2.toFixed(2);

    if (localStorage.getItem("gesamt") !== null && localStorage.getItem("toleranz") !== null) {
      var previewgesamt = localStorage.getItem("gesamt");
      var previewtoleranz = localStorage.getItem("toleranz");
      var newgesamt = parseInt(previewgesamt) + parseInt(ergebnis2);
      var previewergebnis = (newgesamt * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    } else {
      var previewtoleranz = localStorage.getItem("toleranz");
      var previewergebnis = (ergebnis2 * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    }
  } else if (document.getElementById("select").value == "eiwg") {
    var ergebnis3 = (gewicht * (phe * 40)) / 100;
    document.getElementById("ergebnis").innerHTML = ergebnis3.toFixed(2);

    if (localStorage.getItem("gesamt") !== null && localStorage.getItem("toleranz") !== null) {
      var previewgesamt = localStorage.getItem("gesamt");
      var previewtoleranz = localStorage.getItem("toleranz");
      var newgesamt = parseInt(previewgesamt) + parseInt(ergebnis3);
      var previewergebnis = (newgesamt * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    } else {
      var previewtoleranz = localStorage.getItem("toleranz");
      var previewergebnis = (ergebnis3 * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    }
  } else if (document.getElementById("select").value == "eiws") {
    var ergebnis4 = (gewicht * (phe * 50)) / 100;
    document.getElementById("ergebnis").innerHTML = ergebnis4.toFixed(2);

    if (localStorage.getItem("gesamt") !== null && localStorage.getItem("toleranz") !== null) {
      var previewgesamt = localStorage.getItem("gesamt");
      var previewtoleranz = localStorage.getItem("toleranz");
      var newgesamt = parseInt(previewgesamt) + parseInt(ergebnis4);
      var previewergebnis = (newgesamt * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    } else {
      var previewtoleranz = localStorage.getItem("toleranz");
      var previewergebnis = (ergebnis4 * 100) / previewtoleranz;
      document.getElementById("preview").style.width = previewergebnis + "%";
    }
  }
}

function hiNzufugen() {
  if (document.pherechner.phe.value.length === 0) {
    alert("Keinen Wert eingetragen!");
    return false;
  }
  if (document.pherechner.gewicht.value.length === 0) {
    alert("Kein Gewicht eingetragen!");
    return false;
  }

  var r = confirm("Zum Tagesplan hinzufügen?");
  if (r === true) {
    if (document.pherechner.name.value.length !== 0) {
      var name = '<span class="bold">+ ' + document.pherechner.name.value + ": </span>";
    } else {
      var name = '<span class="bold">+ </span>';
    }
    var phe = parseFloat(document.pherechner.phe.value.replace(",", "."));
    var gewicht = parseFloat(document.pherechner.gewicht.value.replace(",", "."));

    if (document.getElementById("select").value == "phe") {
      var ergebnis1 = (gewicht * phe) / 100;
      if (localStorage.getItem("plan") !== null) {
        var plan1 =
          localStorage.getItem("plan") +
          '<p class="plan">' +
          name +
          ergebnis1.toFixed(2) +
          " Phe</p>";
        localStorage.setItem("plan", plan1);
        document.getElementById("plan").innerHTML = localStorage.getItem("plan");

        var gesamt1 = parseFloat(localStorage.getItem("gesamt")) + ergebnis1;
        localStorage.setItem("gesamt", gesamt1.toFixed(2));
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");

        var ubrig1 = parseFloat(localStorage.getItem("ubrig")) - ergebnis1;
        localStorage.setItem("ubrig", ubrig1.toFixed(2));
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      } else {
        var startplan1 = '<p class="plan">' + name + ergebnis1.toFixed(2) + " Phe</p>";
        localStorage.setItem("plan", startplan1);
        localStorage.setItem("gesamt", ergebnis1.toFixed(2));
        var startubrig1 = localStorage.getItem("toleranz") - ergebnis1;
        localStorage.setItem("ubrig", startubrig1.toFixed(2));

        document.getElementById("plan").innerHTML = localStorage.getItem("plan");
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      }
    } else if (document.getElementById("select").value == "eiwo") {
      var ergebnis2 = (gewicht * (phe * 30)) / 100;
      if (localStorage.getItem("plan") !== null) {
        var plan2 =
          localStorage.getItem("plan") +
          '<p class="plan">' +
          name +
          ergebnis2.toFixed(2) +
          " Phe</p>";
        localStorage.setItem("plan", plan2);
        document.getElementById("plan").innerHTML = localStorage.getItem("plan");

        var gesamt2 = parseFloat(localStorage.getItem("gesamt")) + ergebnis2;
        localStorage.setItem("gesamt", gesamt2.toFixed(2));
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");

        var ubrig2 = parseFloat(localStorage.getItem("ubrig")) - ergebnis2;
        localStorage.setItem("ubrig", ubrig2.toFixed(2));
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      } else {
        var startplan2 = '<p class="plan">' + name + ergebnis2.toFixed(2) + " Phe</p>";
        localStorage.setItem("plan", startplan2);
        localStorage.setItem("gesamt", ergebnis2.toFixed(2));
        var startubrig2 = localStorage.getItem("toleranz") - ergebnis2;
        localStorage.setItem("ubrig", startubrig2.toFixed(2));

        document.getElementById("plan").innerHTML = localStorage.getItem("plan");
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      }
    } else if (document.getElementById("select").value == "eiwg") {
      var ergebnis3 = (gewicht * (phe * 40)) / 100;
      if (localStorage.getItem("plan") !== null) {
        var plan3 =
          localStorage.getItem("plan") +
          '<p class="plan">' +
          name +
          ergebnis3.toFixed(2) +
          " Phe</p>";
        localStorage.setItem("plan", plan3);
        document.getElementById("plan").innerHTML = localStorage.getItem("plan");

        var gesamt3 = parseFloat(localStorage.getItem("gesamt")) + ergebnis3;
        localStorage.setItem("gesamt", gesamt3.toFixed(2));
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");

        var ubrig3 = parseFloat(localStorage.getItem("ubrig")) - ergebnis3;
        localStorage.setItem("ubrig", ubrig3.toFixed(2));
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      } else {
        var startplan3 = '<p class="plan">' + name + ergebnis3.toFixed(2) + " Phe</p>";
        localStorage.setItem("plan", startplan3);
        localStorage.setItem("gesamt", ergebnis3.toFixed(2));
        var startubrig3 = localStorage.getItem("toleranz") - ergebnis3;
        localStorage.setItem("ubrig", startubrig3.toFixed(2));

        document.getElementById("plan").innerHTML = localStorage.getItem("plan");
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      }
    } else if (document.getElementById("select").value == "eiws") {
      var ergebnis4 = (gewicht * (phe * 50)) / 100;
      if (localStorage.getItem("plan") !== null) {
        var plan4 =
          localStorage.getItem("plan") +
          '<p class="plan">' +
          name +
          ergebnis4.toFixed(2) +
          " Phe</p>";
        localStorage.setItem("plan", plan4);
        document.getElementById("plan").innerHTML = localStorage.getItem("plan");

        var gesamt4 = parseFloat(localStorage.getItem("gesamt")) + ergebnis4;
        localStorage.setItem("gesamt", gesamt4.toFixed(2));
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");

        var ubrig4 = parseFloat(localStorage.getItem("ubrig")) - ergebnis4;
        localStorage.setItem("ubrig", ubrig4.toFixed(2));
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      } else {
        var startplan4 = '<p class="plan">' + name + ergebnis4.toFixed(2) + " Phe</p>";
        localStorage.setItem("plan", startplan4);
        localStorage.setItem("gesamt", ergebnis4.toFixed(2));
        var startubrig4 = localStorage.getItem("toleranz") - ergebnis4;
        localStorage.setItem("ubrig", startubrig4.toFixed(2));

        document.getElementById("plan").innerHTML = localStorage.getItem("plan");
        document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");
        document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
      }
    }
    if (localStorage.getItem("toleranz") !== null) {
      var loadgesamt = localStorage.getItem("gesamt");
      var loadtoleranz = localStorage.getItem("toleranz");
      var loadergebnis = (loadgesamt * 100) / loadtoleranz;
      document.getElementById("loading").style.width = loadergebnis + "%";
    } else {
      document.getElementById("loading").style.width = "0%";
    }
    document.getElementById("preview").style.width = "0%";
  } else {
  }
}

function tagPlanfertig() {
  if (localStorage.getItem("gesamt") === null) {
    alert("Keine Einträge im Tagesplan!");
    return false;
  }

  var r = confirm("Tagesplan zurücksetzen und Gesamt in Tagesliste speichern?");
  if (r === true) {
    var today = new Date();
    var date =
      ("0" + today.getDate().toString()).substr(-2) +
      "." +
      ("0" + (today.getMonth() + 1).toString()).substr(-2) +
      "." +
      today.getFullYear().toString();
    var gesamt7 = parseFloat(localStorage.getItem("gesamt"));
    if (localStorage.getItem("liste") !== null) {
      var count1 = parseFloat(localStorage.getItem("tage")) + 1;
      localStorage.setItem("tage", count1);
      var tage1 = parseFloat(localStorage.getItem("tage"));

      var liste1 =
        localStorage.getItem("liste") +
        '<p class="liste"><span class="bold">' +
        date +
        ":</span> " +
        gesamt7.toFixed(2) +
        " Phe</p>";
      localStorage.setItem("liste", liste1);
      document.getElementById("liste").innerHTML = localStorage.getItem("liste");

      var gesamtliste2 = parseFloat(localStorage.getItem("gesamtliste")) + gesamt7;
      localStorage.setItem("gesamtliste", gesamtliste2);
      var gesamtliste1 = parseFloat(localStorage.getItem("gesamtliste"));

      var durchschnitt1 = gesamtliste1 / tage1;
      localStorage.setItem("durchschnitt", durchschnitt1.toFixed(2));
      document.getElementById("durchschnitt").innerHTML = localStorage.getItem("durchschnitt");

      localStorage.removeItem("plan");
      localStorage.removeItem("gesamt");
      localStorage.removeItem("ubrig");
      document.getElementById("plan").innerHTML = "0 Phe";
      document.getElementById("gesamt").innerHTML = "0";
      document.getElementById("ubrig").innerHTML = localStorage.getItem("toleranz");
      document.getElementById("tage").innerHTML = localStorage.getItem("tage");
    } else {
      var startliste1 =
        '<p class="liste"><span class="bold">' +
        date +
        ":</span> " +
        gesamt7.toFixed(2) +
        " Phe</p>";
      localStorage.setItem("liste", startliste1);
      document.getElementById("liste").innerHTML = localStorage.getItem("liste");

      localStorage.setItem("tage", "1");
      var starttage1 = parseFloat(localStorage.getItem("tage"));

      localStorage.setItem("gesamtliste", gesamt7);
      var startgesamtliste1 = parseFloat(localStorage.getItem("gesamtliste"));

      var startdurchschnitt1 = startgesamtliste1 / starttage1;
      localStorage.setItem("durchschnitt", startdurchschnitt1.toFixed(2));
      document.getElementById("durchschnitt").innerHTML = localStorage.getItem("durchschnitt");

      localStorage.removeItem("plan");
      localStorage.removeItem("gesamt");
      localStorage.removeItem("ubrig");
      document.getElementById("plan").innerHTML = "0 Phe";
      document.getElementById("gesamt").innerHTML = "0";
      document.getElementById("ubrig").innerHTML = localStorage.getItem("toleranz");
      document.getElementById("tage").innerHTML = localStorage.getItem("tage");
    }
    if (localStorage.getItem("tage") == 1) {
      document.getElementById("motivation").innerHTML =
        "<br><p>Super, dein erster Tag ist eingetragen.</p>";
    } else if (localStorage.getItem("tage") >= 2 && localStorage.getItem("tage") <= 4) {
      document.getElementById("motivation").innerHTML = "<br><p>Trage weiter Tage ein :)</p>";
    } else if (localStorage.getItem("tage") >= 5 && localStorage.getItem("tage") <= 6) {
      document.getElementById("motivation").innerHTML =
        "<br><p>5 Tage, du hast fast schon eine Woche geschafft.</p>";
    } else if (localStorage.getItem("tage") >= 7 && localStorage.getItem("tage") <= 13) {
      document.getElementById("motivation").innerHTML =
        "<br><p>Deine erste Woche, weiter so :)</p>";
    } else if (localStorage.getItem("tage") >= 14 && localStorage.getItem("tage") <= 20) {
      document.getElementById("motivation").innerHTML = "<br><p>2 Wochen, nicht schlecht!</p>";
    } else if (localStorage.getItem("tage") >= 21 && localStorage.getItem("tage") <= 27) {
      document.getElementById("motivation").innerHTML = "<br><p>3 Wochen? Respekt :o</p>";
    } else if (localStorage.getItem("tage") >= 28 && localStorage.getItem("tage") <= 29) {
      document.getElementById("motivation").innerHTML = "<br><p>4 Wochen, fast ein Monat!</p>";
    } else if (localStorage.getItem("tage") >= 30 && localStorage.getItem("tage") <= 34) {
      document.getElementById("motivation").innerHTML = "<br><p>1 Monat, du bist Profi.</p>";
    } else if (localStorage.getItem("tage") >= 35 && localStorage.getItem("tage") <= 41) {
      document.getElementById("motivation").innerHTML = "<br><p>5 Wochen, du bist unbesiegbar!</p>";
    } else if (localStorage.getItem("tage") >= 42 && localStorage.getItem("tage") <= 48) {
      document.getElementById("motivation").innerHTML = "<br><p>Mir fehlen die Worte.</p>";
    } else if (localStorage.getItem("tage") >= 49 && localStorage.getItem("tage") <= 59) {
      document.getElementById("motivation").innerHTML =
        "<br><p>Bald hast du 2 Monate geschafft!</p>";
    } else if (localStorage.getItem("tage") >= 60 && localStorage.getItem("tage") <= 69) {
      document.getElementById("motivation").innerHTML = "<br><p>2 Monate, wow :o</p>";
    } else if (localStorage.getItem("tage") >= 90 && localStorage.getItem("tage") <= 120) {
      document.getElementById("motivation").innerHTML =
        "<br><p>Wenn dir die Tagesliste zu lang wird, kannst du sie auch zurücksetzen :P</p>";
    } else {
      document.getElementById("motivation").innerHTML = "";
    }
    document.getElementById("loading").style.width = "0%";
    if (localStorage.getItem("toleranz") !== null) {
      var abdurchschnitt = localStorage.getItem("durchschnitt");
      var abtoleranz = localStorage.getItem("toleranz");
      var abergebnis = (abdurchschnitt * 100) / abtoleranz;
      var abergebnisend = abergebnis - 100;
      document.getElementById("abweichung").innerHTML = abergebnisend.toFixed(0) + "%";
    } else {
      document.getElementById("abweichung").innerHTML = "0%";
    }
    document.getElementById("preview").style.width = "0%";
  } else {
  }
}

function plUs() {
  if (document.pheeinstellungen.wert.value.length === 0) {
    alert("Keinen Wert eingetragen!");
    return false;
  }

  var r = confirm("Wert zum Tagesplan hinzufügen?");
  if (r === true) {
    var ergebnis5 = parseFloat(document.pheeinstellungen.wert.value.replace(",", "."));
    if (localStorage.getItem("plan") !== null) {
      var plan5 =
        localStorage.getItem("plan") +
        '<p class="plan"><span class="bold">+</span> ' +
        ergebnis5.toFixed(2) +
        " Phe</p>";
      localStorage.setItem("plan", plan5);
      document.getElementById("plan").innerHTML = localStorage.getItem("plan");

      var gesamt5 = parseFloat(localStorage.getItem("gesamt")) + ergebnis5;
      localStorage.setItem("gesamt", gesamt5.toFixed(2));
      document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");

      var ubrig5 = parseFloat(localStorage.getItem("ubrig")) - ergebnis5;
      localStorage.setItem("ubrig", ubrig5.toFixed(2));
      document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
    } else {
      var startplan5 =
        '<p class="plan"><span class="bold">+</span> ' + ergebnis5.toFixed(2) + " Phe</p>";
      localStorage.setItem("plan", startplan5);
      localStorage.setItem("gesamt", ergebnis5.toFixed(2));
      var startubrig5 = localStorage.getItem("toleranz") - ergebnis5;
      localStorage.setItem("ubrig", startubrig5.toFixed(2));

      document.getElementById("plan").innerHTML = localStorage.getItem("plan");
      document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");
      document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
    }
    if (localStorage.getItem("toleranz") !== null) {
      var loadgesamt = localStorage.getItem("gesamt");
      var loadtoleranz = localStorage.getItem("toleranz");
      var loadergebnis = (loadgesamt * 100) / loadtoleranz;
      document.getElementById("loading").style.width = loadergebnis + "%";
    } else {
      document.getElementById("loading").style.width = "0%";
    }
    document.getElementById("preview").style.width = "0%";
  } else {
  }
}

function miNus() {
  if (document.pheeinstellungen.wert.value.length === 0) {
    alert("Keinen Wert eingetragen!");
    return false;
  }

  var r = confirm("Wert vom Tagesplan abziehen?");
  if (r === true) {
    var ergebnis6 = parseFloat(document.pheeinstellungen.wert.value.replace(",", "."));
    if (localStorage.getItem("plan") !== null) {
      var plan6 =
        localStorage.getItem("plan") +
        '<p class="plan"><span class="bold">-</span> ' +
        ergebnis6.toFixed(2) +
        " Phe</p>";
      localStorage.setItem("plan", plan6);
      document.getElementById("plan").innerHTML = localStorage.getItem("plan");

      var gesamt6 = parseFloat(localStorage.getItem("gesamt")) - ergebnis6;
      localStorage.setItem("gesamt", gesamt6.toFixed(2));
      document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");

      var ubrig6 = parseFloat(localStorage.getItem("ubrig")) + ergebnis6;
      localStorage.setItem("ubrig", ubrig6.toFixed(2));
      document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
    } else {
      var ergebnis7 = 0 - ergebnis6;
      var startplan6 =
        '<p class="plan"><span class="bold">-</span> ' + ergebnis7.toFixed(2) + " Phe</p>";
      localStorage.setItem("plan", startplan6);
      localStorage.setItem("gesamt", ergebnis7.toFixed(2));
      var startubrig6 = localStorage.getItem("toleranz") - ergebnis7;
      localStorage.setItem("ubrig", startubrig6.toFixed(2));

      document.getElementById("plan").innerHTML = localStorage.getItem("plan");
      document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");
      document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
    }
    if (localStorage.getItem("toleranz") !== null) {
      var loadgesamt = localStorage.getItem("gesamt");
      var loadtoleranz = localStorage.getItem("toleranz");
      var loadergebnis = (loadgesamt * 100) / loadtoleranz;
      document.getElementById("loading").style.width = loadergebnis + "%";
    } else {
      document.getElementById("loading").style.width = "0%";
    }
    document.getElementById("preview").style.width = "0%";
  } else {
  }
}

function tagPlanreset() {
  var r = confirm("Tagesplan, Gesamt und Übrig zurücksetzen?");
  if (r === true) {
    localStorage.removeItem("plan");
    localStorage.removeItem("gesamt");
    localStorage.removeItem("ubrig");
    document.getElementById("plan").innerHTML = "0 Phe";
    document.getElementById("gesamt").innerHTML = "0";
    if (localStorage.getItem("toleranz") !== null) {
      document.getElementById("ubrig").innerHTML = localStorage.getItem("toleranz");
    } else {
      document.getElementById("ubrig").innerHTML = "0";
    }
    document.getElementById("loading").style.width = "0%";
    document.getElementById("preview").style.width = "0%";
  } else {
  }
}

function tagListereset() {
  var r = confirm("Tagesliste und Durchschnitt zurücksetzen?");
  if (r === true) {
    localStorage.removeItem("tage");
    localStorage.removeItem("liste");
    localStorage.removeItem("gesamtliste");
    localStorage.removeItem("durchschnitt");
    document.getElementById("liste").innerHTML = "0 Tage";
    document.getElementById("durchschnitt").innerHTML = "0";
    document.getElementById("abweichung").innerHTML = "0%";
    document.getElementById("tage").innerHTML = "0";
    document.getElementById("motivation").innerHTML = "";
  } else {
  }
}

function spEichern() {
  if (document.pheeinstellungen.toleranz.value.length === 0) {
    alert("Keine Phetoleranz eingetragen!");
    return false;
  }

  var r = confirm("Phetoleranz speichern?");
  if (r === true) {
    var ubrig = parseFloat(document.pheeinstellungen.toleranz.value.replace(",", "."));
    localStorage.setItem("toleranz", ubrig.toFixed(2));
    document.getElementById("toleranz").innerHTML = localStorage.getItem("toleranz");
    if (localStorage.getItem("plan") !== null) {
      var ubrig7 =
        parseFloat(localStorage.getItem("toleranz")) - parseFloat(localStorage.getItem("gesamt"));
      localStorage.setItem("ubrig", ubrig7.toFixed(2));
      document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
    } else {
      document.getElementById("ubrig").innerHTML = localStorage.getItem("toleranz");
    }
    if (localStorage.getItem("gesamt") !== null) {
      var loadgesamt = localStorage.getItem("gesamt");
      var loadtoleranz = localStorage.getItem("toleranz");
      var loadergebnis = (loadgesamt * 100) / loadtoleranz;
      document.getElementById("loading").style.width = loadergebnis + "%";
    } else {
      document.getElementById("loading").style.width = "0%";
    }
    if (localStorage.getItem("durchschnitt") !== null) {
      var abdurchschnitt = localStorage.getItem("durchschnitt");
      var abtoleranz = localStorage.getItem("toleranz");
      var abergebnis = (abdurchschnitt * 100) / abtoleranz;
      var abergebnisend = abergebnis - 100;
      document.getElementById("abweichung").innerHTML = abergebnisend.toFixed(0) + "%";
    } else {
      document.getElementById("abweichung").innerHTML = "0%";
    }
    document.getElementById("preview").style.width = "0%";
  } else {
  }
}

function loEschen() {
  var r = confirm("Phetoleranz und Übrig zurücksetzen?");
  if (r === true) {
    localStorage.removeItem("toleranz");
    localStorage.removeItem("ubrig");
    document.getElementById("toleranz").innerHTML = "0";
    document.getElementById("ubrig").innerHTML = "0";
    document.getElementById("loading").style.width = "0%";
    document.getElementById("abweichung").innerHTML = "0%";
    document.getElementById("preview").style.width = "0%";
  } else {
  }
}

function koMma() {
  if (document.getElementById("selectkomma").value == "wertkomma") {
    if (document.pherechner.phe.value.length === 0) {
      document.pherechner.phe.value += "0.";
    } else {
      document.pherechner.phe.value += ".";
    }
  } else if (document.getElementById("selectkomma").value == "gewichtkomma") {
    if (document.pherechner.gewicht.value.length === 0) {
      document.pherechner.gewicht.value += "0.";
    } else {
      document.pherechner.gewicht.value += ".";
    }
  } else if (document.getElementById("selectkomma").value == "korrekturkomma") {
    if (document.pheeinstellungen.wert.value.length === 0) {
      document.pheeinstellungen.wert.value += "0.";
    } else {
      document.pheeinstellungen.wert.value += ".";
    }
  } else if (document.getElementById("selectkomma").value == "toleranzkomma") {
    if (document.pheeinstellungen.toleranz.value.length === 0) {
      document.pheeinstellungen.toleranz.value += "0.";
    } else {
      document.pheeinstellungen.toleranz.value += ".";
    }
  }
}

if (localStorage.getItem("plan") !== null) {
  document.getElementById("gesamt").innerHTML = localStorage.getItem("gesamt");
  document.getElementById("ubrig").innerHTML = localStorage.getItem("ubrig");
  document.getElementById("plan").innerHTML = localStorage.getItem("plan");
} else {
  document.getElementById("gesamt").innerHTML = "0";
  document.getElementById("plan").innerHTML = "0 Phe";
  if (localStorage.getItem("toleranz") !== null) {
    document.getElementById("ubrig").innerHTML = localStorage.getItem("toleranz");
  } else {
    document.getElementById("ubrig").innerHTML = "0";
  }
}

if (localStorage.getItem("liste") !== null) {
  document.getElementById("durchschnitt").innerHTML = localStorage.getItem("durchschnitt");
  document.getElementById("liste").innerHTML = localStorage.getItem("liste");
} else {
  document.getElementById("durchschnitt").innerHTML = "0";
  document.getElementById("liste").innerHTML = "0 Tage";
}

if (localStorage.getItem("toleranz") !== null) {
  document.getElementById("toleranz").innerHTML = localStorage.getItem("toleranz");
} else {
  document.getElementById("toleranz").innerHTML = "0";
}

if (
  localStorage.getItem("lebensmittel") !== null &&
  localStorage.getItem("zwlebensmittel") == null
) {
  var lminput = JSON.parse(localStorage.getItem("lebensmittel"));
  for (var i = 0; i < lminput.length - 1; i++) {
    if (i < lminput.length - 2) {
      document.getElementById("lmname").value = lminput[i].toString().replace(":", "") + " ";
    } else {
      document.getElementById("lmname").value = lminput[i].toString().replace(":", "");
    }
  }
  document.getElementById("lmwert").value = lminput[lminput.length - 1];
} else if (
  localStorage.getItem("lebensmittel") !== null &&
  localStorage.getItem("zwlebensmittel") !== null
) {
  var lminput = JSON.parse(localStorage.getItem("lebensmittel"));
  document.getElementById("lmwert").value = lminput[lminput.length - 1];
}

if (
  localStorage.getItem("zwlebensmittel") !== null &&
  localStorage.getItem("lebensmittel") == null
) {
  var lminput = JSON.parse(localStorage.getItem("zwlebensmittel"));
  for (var i = 0; i < lminput.length - 1; i++) {
    if (i < lminput.length - 2) {
      document.getElementById("lmname").value = lminput[i].toString().replace(":", "") + " ";
    } else {
      document.getElementById("lmname").value = lminput[i].toString().replace(":", "");
    }
  }
  document.getElementById("lmgewicht").value = lminput[lminput.length - 1];
} else if (
  localStorage.getItem("zwlebensmittel") !== null &&
  localStorage.getItem("lebensmittel") !== null
) {
  var lminput = JSON.parse(localStorage.getItem("zwlebensmittel"));
  document.getElementById("lmgewicht").value = lminput[lminput.length - 1];
}

if (localStorage.getItem("checkbox") !== null) {
  document.getElementById("keinkomma").style.display = "block";
} else {
  document.getElementById("keinkomma").style.display = "none";
}

function inPutw() {
  if (localStorage.getItem("checkbox") !== null) {
    if (document.getElementById("lmwert").value.indexOf(".") < 1) {
      document.getElementById("lmwert").value = "";
    } else {
    }
  } else {
    document.getElementById("lmwert").value = "";
    document.getElementById("ergebnis").innerHTML = "0";
    document.getElementById("preview").style.width = "0%";
  }
}

function inPutg() {
  if (localStorage.getItem("checkbox") !== null) {
    if (document.getElementById("lmgewicht").value.indexOf(".") < 1) {
      document.getElementById("lmgewicht").value = "";
    } else {
    }
  } else {
    document.getElementById("lmgewicht").value = "";
    document.getElementById("ergebnis").innerHTML = "0";
    document.getElementById("preview").style.width = "0%";
  }
}

function inPutwk() {
  if (localStorage.getItem("checkbox") !== null) {
    if (document.getElementById("wertkorr").value.indexOf(".") < 1) {
      document.getElementById("wertkorr").value = "";
    } else {
    }
  } else {
    document.getElementById("wertkorr").value = "";
  }
}

function inPutpt() {
  if (localStorage.getItem("checkbox") !== null) {
    if (document.getElementById("phetol").value.indexOf(".") < 1) {
      document.getElementById("phetol").value = "";
    } else {
    }
  } else {
    document.getElementById("phetol").value = "";
  }
}

function chEckerbox() {
  if (localStorage.getItem("checkbox1") !== null) {
    localStorage.removeItem("checkbox1");
    document.getElementById("checker1").checked = false;
    document.getElementById("tagesplanzeigen").style.display = "none";
  } else {
    var checkedit = "1";
    localStorage.setItem("checkbox1", checkedit);
    document.getElementById("checker1").checked = true;
    document.getElementById("tagesplanzeigen").style.display = "block";
  }
}

if (localStorage.getItem("checkbox1") !== null) {
  document.getElementById("checker1").checked = true;
  document.getElementById("tagesplanzeigen").style.display = "block";
} else {
  document.getElementById("checker1").checked = false;
  document.getElementById("tagesplanzeigen").style.display = "none";
}

function chEckerboxx() {
  if (localStorage.getItem("checkbox2") !== null) {
    localStorage.removeItem("checkbox2");
    document.getElementById("checker2").checked = false;
    document.getElementById("tageslistezeigen").style.display = "none";
  } else {
    var checkedit = "1";
    localStorage.setItem("checkbox2", checkedit);
    document.getElementById("checker2").checked = true;
    document.getElementById("tageslistezeigen").style.display = "block";
  }
}

if (localStorage.getItem("checkbox2") !== null) {
  document.getElementById("checker2").checked = true;
  document.getElementById("tageslistezeigen").style.display = "block";
} else {
  document.getElementById("checker2").checked = false;
  document.getElementById("tageslistezeigen").style.display = "none";
}

if (localStorage.getItem("gesamt") !== null && localStorage.getItem("toleranz") !== null) {
  var loadgesamt = localStorage.getItem("gesamt");
  var loadtoleranz = localStorage.getItem("toleranz");
  var loadergebnis = (loadgesamt * 100) / loadtoleranz;
  document.getElementById("loading").style.width = loadergebnis + "%";
} else {
  document.getElementById("loading").style.width = "0%";
}

if (localStorage.getItem("durchschnitt") !== null && localStorage.getItem("toleranz") !== null) {
  var abdurchschnitt = localStorage.getItem("durchschnitt");
  var abtoleranz = localStorage.getItem("toleranz");
  var abergebnis = (abdurchschnitt * 100) / abtoleranz;
  var abergebnisend = abergebnis - 100;
  document.getElementById("abweichung").innerHTML = abergebnisend.toFixed(0) + "%";
} else {
  document.getElementById("abweichung").innerHTML = "0%";
}

if (localStorage.getItem("tage") !== null) {
  document.getElementById("tage").innerHTML = localStorage.getItem("tage");
} else {
  document.getElementById("tage").innerHTML = "0";
}

if (localStorage.getItem("tage") == 1) {
  document.getElementById("motivation").innerHTML =
    "<br><p>Super, dein erster Tag ist eingetragen.</p>";
} else if (localStorage.getItem("tage") >= 2 && localStorage.getItem("tage") <= 4) {
  document.getElementById("motivation").innerHTML = "<br><p>Trage weiter Tage ein :)</p>";
} else if (localStorage.getItem("tage") >= 5 && localStorage.getItem("tage") <= 6) {
  document.getElementById("motivation").innerHTML =
    "<br><p>5 Tage, du hast fast schon eine Woche geschafft.</p>";
} else if (localStorage.getItem("tage") >= 7 && localStorage.getItem("tage") <= 13) {
  document.getElementById("motivation").innerHTML = "<br><p>Deine erste Woche, weiter so :)</p>";
} else if (localStorage.getItem("tage") >= 14 && localStorage.getItem("tage") <= 20) {
  document.getElementById("motivation").innerHTML = "<br><p>2 Wochen, nicht schlecht!</p>";
} else if (localStorage.getItem("tage") >= 21 && localStorage.getItem("tage") <= 27) {
  document.getElementById("motivation").innerHTML = "<br><p>3 Wochen? Respekt :o</p>";
} else if (localStorage.getItem("tage") >= 28 && localStorage.getItem("tage") <= 29) {
  document.getElementById("motivation").innerHTML = "<br><p>4 Wochen, fast ein Monat!</p>";
} else if (localStorage.getItem("tage") >= 30 && localStorage.getItem("tage") <= 34) {
  document.getElementById("motivation").innerHTML = "<br><p>1 Monat, du bist Profi.</p>";
} else if (localStorage.getItem("tage") >= 35 && localStorage.getItem("tage") <= 41) {
  document.getElementById("motivation").innerHTML = "<br><p>5 Wochen, du bist unbesiegbar!</p>";
} else if (localStorage.getItem("tage") >= 42 && localStorage.getItem("tage") <= 48) {
  document.getElementById("motivation").innerHTML = "<br><p>Mir fehlen die Worte.</p>";
} else if (localStorage.getItem("tage") >= 49 && localStorage.getItem("tage") <= 59) {
  document.getElementById("motivation").innerHTML = "<br><p>Bald hast du 2 Monate geschafft!</p>";
} else if (localStorage.getItem("tage") >= 60 && localStorage.getItem("tage") <= 69) {
  document.getElementById("motivation").innerHTML = "<br><p>2 Monate, wow :o</p>";
} else if (localStorage.getItem("tage") >= 90 && localStorage.getItem("tage") <= 120) {
  document.getElementById("motivation").innerHTML =
    "<br><p>Wenn dir die Tagesliste zu lang wird, kannst du sie auch zurücksetzen :P</p>";
} else {
  document.getElementById("motivation").innerHTML = "";
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

if (document.getElementById("select").value == "phe") {
  var phe = parseFloat(document.pherechner.phe.value.replace(",", "."));
  var gewicht = parseFloat(document.pherechner.gewicht.value.replace(",", "."));
  var ergebnis1 = (gewicht * phe) / 100;
  document.getElementById("ergebnis").innerHTML = ergebnis1.toFixed(2);
} else if (document.getElementById("select").value == "eiwo") {
  var phe = parseFloat(document.pherechner.phe.value.replace(",", "."));
  var gewicht = parseFloat(document.pherechner.gewicht.value.replace(",", "."));
  var ergebnis2 = (gewicht * (phe * 30)) / 100;
  document.getElementById("ergebnis").innerHTML = ergebnis2.toFixed(2);
} else if (document.getElementById("select").value == "eiwg") {
  var phe = parseFloat(document.pherechner.phe.value.replace(",", "."));
  var gewicht = parseFloat(document.pherechner.gewicht.value.replace(",", "."));
  var ergebnis3 = (gewicht * (phe * 40)) / 100;
  document.getElementById("ergebnis").innerHTML = ergebnis3.toFixed(2);
} else if (document.getElementById("select").value == "eiws") {
  var phe = parseFloat(document.pherechner.phe.value.replace(",", "."));
  var gewicht = parseFloat(document.pherechner.gewicht.value.replace(",", "."));
  var ergebnis4 = (gewicht * (phe * 50)) / 100;
  document.getElementById("ergebnis").innerHTML = ergebnis4.toFixed(2);
}
if (document.pherechner.phe.value.length === 0) {
  document.getElementById("ergebnis").innerHTML = "0";
}
if (document.pherechner.gewicht.value.length === 0) {
  document.getElementById("ergebnis").innerHTML = "0";
}
