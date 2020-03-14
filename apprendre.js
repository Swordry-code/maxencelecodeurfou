var bouttons = document.querySelectorAll("div.conteneur > div.bouttons > button");
var resultat = document.getElementById('resultat')
var ptsJoueur

for (let i = 0; i < bouttons.length; i++) {
  bouttons[i].addEventListener('click', function() {
    const joueur = bouttons[i].id;
    console.log(joueur);
    const IA = bouttons[Math.floor(Math.random() * bouttons.length)].id;

    var imageperso = document.querySelectorAll("div.conteneur > div.affichage > div.affichageImage > img");
    imageperso[0].src = "files/"+joueur+".png";
    imageperso[2].src = "files/"+IA+".png";
    if (joueur == IA) {
        resultat.innerHTML = "Egalité";
    }

    else if ((joueur === "pierre" && IA === "ciseaux") || (joueur === "ciseaux" && IA === "feuille") || (joueur === "feuille") && (IA === "pierre")) {
        resultat.innerHTML = "Gagné";
    }

    else {
        resultat.innerHTML = "Perdu";
    }

    vs = document.getElementById('vs')
    vs.style.display = "block";

  })

}
