var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

var score = 0;
var opacity = 0;
var opacity1 = 0;
var opacity2 = 0;
var opacity3 = 0;
var opacity4 = 0;


myRec.continuous = true; // do continuous recognition
myRec.interimResults = false;
// allow partial recognition (faster, less accurate)

var body = document.getElementById('body');
var result = document.getElementById('result');
var instruction = document.getElementById('instruction');
var coverbg = document.getElementById('coverbg');
var coverleft = document.getElementById('coverleft');
var cover1 = document.getElementById('cover1');
var cover2 = document.getElementById('cover2');
var coverb = document.getElementById('coverb');

function preload() {
}

function setup() {
  // text
  instruction.innerHTML = "Puissance baigne dans les chiffres. <br> Pouvoir neutre qui réfère aux objets pluriels.  <br> Saisir de la parole, recueillir des indices sans ou avec sens.";
  result.innerHTML = "0";
  myRec.onResult = showResult;
  // sound
  myVoice.speak("Puissance baigne dans les chiffres. Pouvoir neutre qui réfère aux objets pluriels. Saisir de la parole, recueillir des indices sans ou avec sens.");
  myRec.start();
  // body bg
  body.style.backgroundImage = "url('asset/background.jpg')";
  body.style.backgroundSize = "cover";
  //cover bg
  coverbg.style.backgroundImage = "url('asset/cover.png')";
  coverbg.style.backgroundSize = "cover";
  coverbg.style.opacity = opacity;
  //coverleft
  coverleft.style.backgroundImage = "url('asset/coverr.png')";
  coverleft.style.backgroundSize = "cover";
  coverleft.style.opacity = opacity1;
  //cover1
  cover1.style.backgroundImage = "url('asset/cover1.png')";
  cover1.style.backgroundSize = "cover";
  cover1.style.opacity = opacity2;
  //cover2
  cover2.style.backgroundImage = "url('asset/cover2.png')";
  cover2.style.backgroundSize = "cover";
  cover2.style.opacity = opacity3;
  //coverb
  coverb.style.backgroundImage = "url('asset/coverb.png')";
  coverb.style.backgroundSize = "cover";
  coverb.style.opacity = opacity4;

}

function draw() {
  // why draw when you can talk?
}

function showResult() {
  if (myRec.resultValue === true) {
    //myVoice.interrupt = checkbox.elt.checked;
    var texte = myRec.resultString;
    texte = texte.toLowerCase();

    if (texte.includes("bonjour") || 
    texte.includes("salut")  || 
    texte.includes("ça va") ||
    texte.includes("excuse") ||
    texte.includes("droit") ||
    texte.includes("s'il te plaît")||
    texte.includes("s'il vous plaît") ||
    texte.includes("merci") ||
    texte.includes("vous") ||
    texte.includes("aimerais") ||
    texte.includes("devrais") ||
    texte.includes("voudrais") ||
    texte.includes("avec plaisir") ||
    texte.includes("Ceci") ||
    texte.includes("Cela") ||
    texte.includes("je vous en prie") ||
    texte.includes("je t'en prie") ||
    texte.includes("au revoir")  ) {
      score = score + 25;
      opacity += 0.25;
      coverbg.style.opacity = opacity;
      opacity1 += 0.25;
      coverleft.style.opacity = opacity1;
      opacity2 += 0;
      cover1.style.opacity = opacity2;
      opacity3 += 0;
      cover2.style.opacity = opacity3;
      opacity4 += 0.25;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("oui") || 
    texte.includes("ouais")  || 
    texte.includes("grave") ||
    texte.includes("yes") ||
    texte.includes("ça marche") ||
    texte.includes("ça roule") ||
    texte.includes("tu") ||
    texte.includes("ok") ||
    texte.includes("on peux") ||
    texte.includes("cool") ||
    texte.includes("bah ouais") ||
    texte.includes("c'est pas grave") ||
    texte.includes("grave")) {
      score = score + 4;
      opacity += 0;
      coverbg.style.opacity = opacity;
      opacity1 += 0;
      coverleft.style.opacity = opacity1;
      opacity2 += 0.15;
      cover1.style.opacity = opacity2;
      opacity3 += 0.04;
      cover2.style.opacity = opacity3;
      opacity4 += 0.1;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("question") || texte.includes("art")  || texte.includes("institution") || 
    texte.includes("intéressant") || 
    texte.includes("problème") ||
    texte.includes("il faut") ||
    texte.includes("passionnant") ||
    texte.includes("vraiment") ||
    texte.includes("sinon") ||
    texte.includes("en fait") ||
    texte.includes("jeu") ||
    texte.includes("enfin") ||
    texte.includes("proposition") ||
    texte.includes("interrogé") ||
    texte.includes("réseau") ||
    texte.includes("cigarettes") ||
    texte.includes("dépose") ||
    texte.includes("ligne") ||
    texte.includes("sculpture") ||          
    texte.includes("musique") ||
    texte.includes("nul") ||
    texte.includes("con") ||
    texte.includes("c'est") ||
    texte.includes("écologie") ||
    texte.includes("référence") ||
    texte.includes("conférence") ||
    texte.includes("définition") ||
    texte.includes("effondrement") ||
    texte.includes("organisation") ||
    texte.includes("humaine") ||
    texte.includes("considéré") ||
    texte.includes("retour") ||
    texte.includes("contrainte") ||
    texte.includes("régulation") ||
    texte.includes("cadre") ||
    texte.includes("critère") ||
    texte.includes("alilmentation") ||
    texte.includes("péter") ||
    texte.includes("l'ordinateur") ||
    texte.includes("clope") ||
    texte.includes("fumer") ||
    texte.includes("quoi")) {
      score = score + 77;
      opacity += 0.77;
      coverbg.style.opacity = opacity;
      opacity1 += 0.77;
      coverleft.style.opacity = opacity1;
      opacity2 += 0.2;
      cover1.style.opacity = opacity2;
      opacity3 += 0.67;
      cover2.style.opacity = opacity3;
      opacity4 += 0;
      coverb.style.opacity = opacity4;       
    }

    if (texte.includes("truc") || texte.includes("bah")  || texte.includes("alors") || texte.includes("trop") ||
    texte.includes("genre")  ||
    texte.includes("pour")  ||
    texte.includes("tu vois")  ||
    texte.includes("peut-être")  ||
    texte.includes("et puis")  ||
    texte.includes("mais")  ||
    texte.includes("comment")  ||
    texte.includes("volià")  ||
    texte.includes("par exemple")  ||
    texte.includes("parce que")  ||
    texte.includes("du coup")  ||
    texte.includes("un peu")  ||
    texte.includes("différence")  ||
    texte.includes("force")  ||
    texte.includes("information")  ||
    texte.includes("perso")  ||
    texte.includes("en gros") ){
      score = score - 51;
      opacity -= 0.51;
      coverbg.style.opacity = opacity;
      opacity1 -= 0.3;
      coverleft.style.opacity = opacity1;
      opacity2 -= 0;
      cover1.style.opacity = opacity2;
      opacity3 -= 0.61;
      cover2.style.opacity = opacity3;
      opacity4 -= 0;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("il veut pas") || texte.includes("non")  || texte.includes("euh") ||
    texte.includes("par contre") ||
    texte.includes("rien") ||
    texte.includes("ça marche pas")||
    texte.includes("après") ||
    texte.includes("on va") ||
    texte.includes("désolé") ||
    texte.includes("d'autres") ||
    texte.includes("là") ||
    texte.includes("Tu") ||
    texte.includes("T'as") ||
    texte.includes("T'es") ||
    texte.includes("personnellement") ||
    texte.includes("personne")||
    texte.includes("lumière")||
    texte.includes("qu'est-ce que")||
    texte.includes("bizarre")||
    texte.includes("marrant")||
    texte.includes("pourquoi")  ) {
      score = score + 48 ;
      opacity += 0.48;
      coverbg.style.opacity = opacity;
      opacity1 += 0.48;
      coverleft.style.opacity = opacity1;
      opacity2 += 0;
      cover1.style.opacity = opacity2;
      opacity3 += 0.48;
      cover2.style.opacity = opacity3;
      opacity4 += 0.48;
      coverb.style.opacity = opacity4;
  }

  if (texte.includes("technicien") || texte.includes("ou alors")  || texte.includes("à chaque fois") ||
    texte.includes("sexe") ||
    texte.includes("normalement") ||
    texte.includes("déteste")||
    texte.includes("perdu") ||
    texte.includes("c'est quoi") ||
    texte.includes("écran") ||
    texte.includes("stylé") ||
    texte.includes("manque") ||
    texte.includes("méchant") ||
    texte.includes("génial") ||
    texte.includes("correspond") ||
    texte.includes("variable")||
    texte.includes("partage")||
    texte.includes("dévélopper")||
    texte.includes("frontière")||
    texte.includes("limite")||
    texte.includes("nécessités")||
    texte.includes("signification")||
    texte.includes("partimoine")||
    texte.includes("autorise")||
    texte.includes("performance")||
    texte.includes("fabrication")||
    texte.includes("encule") ||
    texte.includes("circulation")||
    texte.includes("mondialisation")||
    texte.includes("géographique")  ) {
      score = score + 10 ;
     opacity += 0.1;
     coverbg.style.opacity = opacity;
     opacity1 += 0.1;
     coverleft.style.opacity = opacity1;
     opacity2 += 0.1;
     cover1.style.opacity = opacity2;
     opacity3 += 0;
     cover2.style.opacity = opacity3;
     opacity4 += 0;
     coverb.style.opacity = opacity4;
    }

    if (texte.includes("valeur") || texte.includes("poids")  || texte.includes("désigne") ||
    texte.includes("capacité") ||
    texte.includes("territoire") ||
    texte.includes("ressource")||
    texte.includes("stratégie") ||
    texte.includes("fonction") ||
    texte.includes("technique") ||
    texte.includes("hiérarchie") ||
    texte.includes("théorie") ||
    texte.includes("notion") ||
    texte.includes("coopération") ||
    texte.includes("présentation") ||
    texte.includes("discours")||
    texte.includes("qui me permet")||
    texte.includes("disparition")||
    texte.includes("juste")||
    texte.includes("contemporain")||
    texte.includes("construction")||
    texte.includes("connecter")||
    texte.includes("erreur")||
    texte.includes("regarde")||
    texte.includes("wang")||
    texte.includes("super")||
    texte.includes("temporalité")||
    texte.includes("immatériel")||
    texte.includes("chat")||
    texte.includes("identification")||
    texte.includes("approprié")||
    texte.includes("provoquer")||
    texte.includes("yuwen")||
    texte.includes("taïwan")||
    texte.includes("écrit")||
    texte.includes("écris")||
    texte.includes("consommation") ) {
      score = score  + 100 ;
      opacity += 0;
      coverbg.style.opacity = opacity;
      opacity1 += 0.9;
      coverleft.style.opacity = opacity1;
      opacity2 += 0;
      cover1.style.opacity = opacity2;
      opacity3 += 1;
      cover2.style.opacity = opacity3;
      opacity4 += 0.9;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("aujourd'hui") || texte.includes("hier")  || texte.includes("avant") ||
    texte.includes("en ce moment") ||
    texte.includes("à l'instant") ||
    texte.includes("temps")||
    texte.includes("spontané")||
    texte.includes("demain")  ) { 
      score = score + 50 ;
      opacity += 0.5;
      coverbg.style.opacity = opacity;
      opacity1 += 0;
      coverleft.style.opacity = opacity1;
      opacity2 += 0.4;
      cover1.style.opacity = opacity2;
      opacity3 += 0.7;
      cover2.style.opacity = opacity3;
      opacity4 += 0.8;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("je trouve") || texte.includes("je sais pas")  || texte.includes("ah bon") ||
    texte.includes("j'essaie") ||
    texte.includes("à propos") ||
    texte.includes("j'ai")||
    texte.includes("j'aimerais") ||
    texte.includes("enferme") ||
    texte.includes("lancer") ||
    texte.includes("idée") ||
    texte.includes("je pense") ||
    texte.includes("oh") ||
    texte.includes("utiliser") ||
    texte.includes("simplement") ||
    texte.includes("impression")||
    texte.includes("j'aime")||
    texte.includes("j'ai l'impression")||
    texte.includes("t'es sûr")||
    texte.includes("on dirait")||
    texte.includes("attends")||
    texte.includes("et tout")||
    texte.includes("soussigné")||
    texte.includes("machin")  ) {
      score = score + 14 ;
      opacity += 0.14;
      coverbg.style.opacity = opacity;
      opacity1 += 0;
      coverleft.style.opacity = opacity1;
      opacity2 += 0.2;
      cover1.style.opacity = opacity2;
      opacity3 += 0;
      cover2.style.opacity = opacity3;
      opacity4 += 0.14;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("public") || texte.includes("article")  || texte.includes("travaille") ||
    texte.includes("vidéo") ||
    texte.includes("ça fait") ||
    texte.includes("projet")||
    texte.includes("similaire") ||
    texte.includes("environnement") ||
    texte.includes("hein") ||
    texte.includes("parole") ||
    texte.includes("pas mal") ||
    texte.includes("putain") ||
    texte.includes("jamais") ||
    texte.includes("couleur") ||
    texte.includes("prendre") ||
    texte.includes("société") ||
    texte.includes("dynamique") ||
    texte.includes("espace") ||
    texte.includes("pique") ||
    texte.includes("il faudrait") ||
    texte.includes("ça fonctionne") ||
    texte.includes("message") ||
    texte.includes("effectivement") ||
    texte.includes("c'est bien")  ) {
      score = score - 15 ;
      opacity -= 0.15;
      coverbg.style.opacity = opacity;
      opacity1 -= 0.2;
      coverleft.style.opacity = opacity1;
      opacity2 -= 0;
      cover1.style.opacity = opacity2;
      opacity3 -= 0;
      cover2.style.opacity = opacity3;
      opacity4 -= 0.15;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("très") || texte.includes("était")  || texte.includes("étais") ||
    texte.includes("chose") ||
    texte.includes("même") ||
    texte.includes("animaux")||
    texte.includes("philosphie") ||
    texte.includes("être") ||
    texte.includes("moment") ||
    texte.includes("petit") ||
    texte.includes("oiseau") ||
    texte.includes("philosophe") ||
    texte.includes("voulais") ||
    texte.includes("donner") ||
    texte.includes("sait") ||
    texte.includes("allez") ||
    texte.includes("fois") ||
    texte.includes("mots") ||
    texte.includes("mot") ||
    texte.includes("sépare") ||
    texte.includes("habiter") ||
    texte.includes("cours") ||
    texte.includes("études") ||
    texte.includes("manière") ||
    texte.includes("nouvelle") ||
    texte.includes("commencer") ||
    texte.includes("titre") ||
    texte.includes("plutôt") ||
    texte.includes("trouver") ||
    texte.includes("essayez") ||
    texte.includes("j'ai envie") ||
    texte.includes("enculez") ||
    texte.includes("conception") ||
    texte.includes("dormir") ||
    texte.includes("métaphore")  ) {
      score = score - 59 ;
      opacity -= 0;
      coverbg.style.opacity = opacity;
      opacity1 -= 0.59;
      coverleft.style.opacity = opacity1;
      opacity2 -= 0.59;
      cover1.style.opacity = opacity2;
      opacity3 -= 0;
      cover2.style.opacity = opacity3;
      opacity4 -= 0.59;
      coverb.style.opacity = opacity4;
    }

    if (texte.includes("value") || texte.includes("viralité")  || texte.includes("histoire") ||
    texte.includes("constitution") ||
    texte.includes("spécifique") ||
    texte.includes("reproduit")||
    texte.includes("dispositif") ||
    texte.includes("détournement") ||
    texte.includes("galerie") ||
    texte.includes("nique") ||
    texte.includes("presse") ||
    texte.includes("carrière") ||
    texte.includes("artiste") ||
    texte.includes("représenté") ||
    texte.includes("équilibre") ||
    texte.includes("ridicule") ||
    texte.includes("édition") ||
    texte.includes("acquise") ||
    texte.includes("déclaration") ||
    texte.includes("intention") ||
    texte.includes("pièce") ||
    texte.includes("extraordinaire") ||
    texte.includes("débat") ||
    texte.includes("inauguration") ||
    texte.includes("bien") ||
    texte.includes("esthétique") ||
    texte.includes("neutralité") ||
    texte.includes("dans le cas") ||
    texte.includes("atelier") ||
    texte.includes("reproduction") ||
    texte.includes("chaint") ||
    texte.includes("contexte") ||
    texte.includes("musée") ||
    texte.includes("essai") ||
    texte.includes("irruption") ||
    texte.includes("acheter") ||
    texte.includes("achète") ||
    texte.includes("réflexion") ||
    texte.includes("abstraction") ||
    texte.includes("reflète") ||
    texte.includes("marchandise") ||
    texte.includes("formation") ||
    texte.includes("certes") ||
    texte.includes("également") ||
    texte.includes("institutionnel") ||
    texte.includes("critique") ||
    texte.includes("structure") ||
    texte.includes("efficacité") ||
    texte.includes("social") ||
    texte.includes("censé") ||
    texte.includes("sentiment") ||
    texte.includes("personnalisé") ||
    texte.includes("contenu")||
    texte.includes("économique")||
    texte.includes("apparence")||
    texte.includes("sociologie") ||
    texte.includes("créativité") ||
    texte.includes("généralisation") ||
    texte.includes("cependant") ||
    texte.includes("collectionneur") ||
    texte.includes("selection") ||
    texte.includes("autorité") ||
    texte.includes("autonomie")  ) {
      score = score - 35 ;
      opacity -= 0;
      coverbg.style.opacity = opacity;
      opacity1 -= 0.25;
      coverleft.style.opacity = opacity1;
      opacity2 -= 0.4;
      cover1.style.opacity = opacity2;
      opacity3 -= 0;
      cover2.style.opacity = opacity3;
      opacity4 -= 0.35;
      coverb.style.opacity = opacity4;
    }
      
    if (texte.includes("phénoménologie") || texte.includes("interprétatif")  || texte.includes("homogène") ||
    texte.includes("pouvoir") ||
    texte.includes("effort") ||
    texte.includes("droit")||
    texte.includes("souligne") ||
    texte.includes("théorie") ||
    texte.includes("défini") ||
    texte.includes("rarement") ||
    texte.includes("rapatrier") ||
    texte.includes("structure") ||
    texte.includes("domination") ||
    texte.includes("idéologie") ||
    texte.includes("condition")||
    texte.includes("légitimité")||
    texte.includes("procuration")||
    texte.includes("exprime")||
    texte.includes("expriment")||
    texte.includes("homologie")||
    texte.includes("quasi")||
    texte.includes("constitue")||
    texte.includes("dissimulation")||
    texte.includes("neutre")||
    texte.includes("fondé")||
    texte.includes("s'incarne")||
    texte.includes("délégation")||
    texte.includes("dépossession")||
    texte.includes("actes")||
    texte.includes("corpus")||
    texte.includes("doute")||
    texte.includes("averti")||
    texte.includes("motivation")||
    texte.includes("apolitisme")||
    texte.includes("rejete") ) {
      score = score  + 64 ;
      opacity += 0.64;
      coverbg.style.opacity = opacity;
      opacity1 += 0;
      coverleft.style.opacity = opacity1;
      opacity2 += 0;
      cover1.style.opacity = opacity2;
      opacity3 += 0.8;
      cover2.style.opacity = opacity3;
      opacity4 += 0.6;
      coverb.style.opacity = opacity4;
    }
    
    if (texte.includes("censure") || texte.includes("reproduisent")  || texte.includes("reproduit") ||
    texte.includes("compromis") ||
    texte.includes("expressif") ||
    texte.includes("indépendant")||
    texte.includes("violence") ||
    texte.includes("dépend") ||
    texte.includes("l'épidémie") ||
    texte.includes("confinement") ||
    texte.includes("rapatrier") ||
    texte.includes("fausse") ||
    texte.includes("s'inspirer") ||
    texte.includes("détient") ||
    texte.includes("maîtrise")||
    texte.includes("tant que")||
    texte.includes("homme")||
    texte.includes("enchaînement")||
    texte.includes("recenser")||
    texte.includes("sans")||
    texte.includes("hautement")||
    texte.includes("sublimé")||
    texte.includes("l'ensemble")||
    texte.includes("tout")||
    texte.includes("primaire")||
    texte.includes("naïf")||
    texte.includes("craindre")||
    texte.includes("malgré")||
    texte.includes("insouciance")||
    texte.includes("isolé")||
    texte.includes("serait")||
    texte.includes("extinction")||
    texte.includes("infiniment")||
    texte.includes("lointaine")||
    texte.includes("stratégie") ) {
      score = score  + 6 ;
      opacity += 0.1;
      coverbg.style.opacity = opacity;
      opacity1 += 0.6;
      coverleft.style.opacity = opacity1;
      opacity2 += 0.1;
      cover1.style.opacity = opacity2;
      opacity3 += 0;
      cover2.style.opacity = opacity3;
      opacity4 += 0;
      coverb.style.opacity = opacity4;
    }  

    // myVoice.speak(myRec.resultString); 
    // debug printer for voice options
    console.log(myRec.resultString);
  }
  instruction.innerHTML = myRec.resultString;
  result.innerHTML = score;
}