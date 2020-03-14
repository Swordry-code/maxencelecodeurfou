var bouttons = document.querySelectorAll("div.conteneur > div.bouttons > button");
var resultat = document.getElementById('resultat')
var ptsJoueur = 0;
var ptsIA = 0;
var historique = document.querySelectorAll("div.conteneur > div.historique > div.affichageHistorique > p")
console.log(historique);

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
        ptsJoueur += 1;
    }

    else {
        resultat.innerHTML = "Perdu";
        ptsIA += 1;
    }

    var vs = document.getElementById('vs')
    vs.style.display = "block";

    var score = document.getElementById('score')
    score.innerHTML = ptsJoueur+" - "+ptsIA;

    historique[3].innerHTML = historique[2].innerHTML
    historique[2].innerHTML = historique[1].innerHTML
    historique[1].innerHTML = historique[0].innerHTML
    historique[0].innerHTML = "Joueur : "+joueur+"<br>Robot : "+IA+"<br>"+resultat.innerHTML+" : "+ptsJoueur+" - "+ptsIA;



  })

}
