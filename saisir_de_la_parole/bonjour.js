var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

var score = 0;

myRec.continuous = true; // do continuous recognition
//myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
    // graphics stuff:
    createCanvas(800, 400);
    background(255, 255, 255);
    fill(0, 0, 0, 255);
    // instructions:
    textSize(32);
    textAlign(CENTER);
    text("je vous écoute", width / 2, height / 2);
    myRec.onResult = showResult;
    myRec.start();
  myVoice.speak("je vous écoute");

}

function draw() {
    // why draw when you can talk?
}

function showResult() {
    if (myRec.resultValue === true) {
        background(255);
        text(myRec.resultString, width / 2, height / 2);
    //myVoice.interrupt = checkbox.elt.checked;
         var texte = myRec.resultString;
         texte = texte.toLowerCase();


if (texte.includes("bonjour") || texte.includes("salut")  || texte.includes("ça va") ||
texte.includes("bonsoir") ||
texte.includes("et toi") ||
texte.includes("s'il te plaît")||
texte.includes("s'il vous plaît") ||
texte.includes("merci") ||
texte.includes("vous") ||
texte.includes("aimerais") ||
texte.includes("voudrais") ||
texte.includes("avec plaisir") ||
texte.includes("je vous en prie") ||
texte.includes("je t'en prie") ||
texte.includes("au revoir")  ) {
          score = score + 50;
         text(score, width / 2, height / 2+ 100  );
}


if (texte.includes("oui") || texte.includes("ouais")  || texte.includes("grave") ||
texte.includes("yes") ||
texte.includes("ça marche") ||
texte.includes("ça roule") ||
texte.includes("cool") ||
texte.includes("ok") ||
texte.includes("on peux") ||
texte.includes("grave") ||
texte.includes("grave") ||
texte.includes("grave") ||
texte.includes("grave") ||
texte.includes("grave") ||
texte.includes("machin")  ) {
          score = score + 20;
         text(score, width / 2, height / 2+ 100  );
        }


    if (texte.includes("question") || texte.includes("art")  || texte.includes("institution") || texte.includes("intéressant")  ) {
          score = score + 20;
         text(score, width / 2, height / 2+ 100  );
        }

        if (texte.includes("truc") || texte.includes("bah")  || texte.includes("alors") || texte.includes("trop")  ) {
          score = score - 20;
         text(score, width / 2, height / 2+ 100  );
        }








        myVoice.speak(myRec.resultString); // debug printer for voice options
        console.log(myRec.resultString);
    }
}