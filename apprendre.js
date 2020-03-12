var buttons = document.querySelectorAll("button");
var resultat = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const joueur = buttons[i].id;
    const IA = buttons[Math.floor(Math.random() * buttons.length)].id;

    var imageperso = document.querySelectorAll("div");
    imageperso[0].innerHTML = "<img id=\"img3\" src=\"files/"+joueur+".png\"></img>"
    imageperso[1].innerHTML = "<img id=\"img3\" src=\"files/"+IA+".png\"></img>"

    if (joueur == IA) {
        resultat = "égalité";
    }

    else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
        resultat = "gagné";
    }

    else {
        resultat = "perdu";
    }
  })

}
