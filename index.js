var addition = require("./table-utils.js").addition

var prompt = require("prompt");

prompt.start();

function play() {

 var mysteryNum =Math.floor(Math.random() * (100 - 0 + 1) + 0)
    console.log(mysteryNum)


  prompt.get({ name: "q", description: "Quel est le nombre mystère ?" }, function (err, res) { // permet de paramétrer la question
   
    if ( isNaN(res.q)) { 
       console.log("error");
       play(); // relance le prompt si la saisie n'est pas valide
    }
     if (res.q < mysteryNum) { 
        console.log("C'est plus!");
        play(); // relance le prompt si la saisie n'est pas valide
    }
    if ( res.q > mysteryNum) { 
        console.log("C'est moins!");
        play(); // relance le prompt si la saisie n'est pas valide
    }if ( res.q === mysteryNum) { // valide la saisie
        console.log("Bravo!");
    }
  });
}

play(); // on n'oublie pas d'appeler la fonction ;)
