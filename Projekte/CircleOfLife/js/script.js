// Switch Views - Segmented Control

function show1() {
    var tages = document.getElementById("two-1");
    var textTages = document.getElementById("Tagesübersicht");
    var top = document.getElementById("two-2");
    var textTop = document.getElementById("Top");
    var besonderes = document.getElementById("two-3");
    var textBesonderes = document.getElementById("Besonderes");
    if (tages.checked == true) {
        textTages.style.display = "block";
    } else {
        textTages.style.display = "none";
    }
    if (top.checked == true) {
        textTop.style.display = "block";
    } else {
        textTop.style.display = "none";
    }
    if (besonderes.checked == true) {
        textBesonderes.style.display = "block";
    } else {
        textBesonderes.style.display = "none";
    }
}

function show2() {
    var wochentag = document.getElementById("three-1");
    var textWochentag = document.getElementById("Wochentagsübersicht");
    var monat = document.getElementById("three-2");
    var textMonat = document.getElementById("Monatsübersicht");
    var jahr = document.getElementById("three-3");
    var textJahr = document.getElementById("Jahresübersicht");
    if (wochentag.checked == true) {
        textWochentag.style.display = "block";
    } else {
        textWochentag.style.display = "none";
    }
    if (monat.checked == true) {
        textMonat.style.display = "block";
    } else {
        textMonat.style.display = "none";
    }
    if (jahr.checked == true) {
        textJahr.style.display = "block";
    } else {
        textJahr.style.display = "none";
    }
}