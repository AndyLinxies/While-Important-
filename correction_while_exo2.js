//exo1
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc"];
let i = 0;

while (i < eleves.length) {
    console.log(`Bonjour ${eleves[i]}`);
    i++;
}

exo2
let fruits = ["pomme","poire","banane","fraise","ananas","mihai"];

while (fruits.length > 0) {
    console.log(fruits);
    fruits.pop();
}
console.log(fruits);

//exo3
let panierLegumes = ["carotte", "betterave", "tomate", "broccoli"];
let caisseLegumes = [];
let longueur = panierLegumes.length;
let i = 0;

while (i < longueur) {
    caisseLegumes.push(panierLegumes[0]);
    panierLegumes.splice(0, 1);
    i++;
}

console.log(panierLegumes);
console.log(caisseLegumes);

//exo4
alert('ON VA JOUER AU JUSTE PRIX');
let chiffresAleatoire = Math.round(Math.random() * 10);
let reponse = +prompt("indique ton chiffre");

while (reponse != chiffresAleatoire) {
    reponse = +prompt("indique ton chiffre");
    if (reponse < chiffresAleatoire) {
        alert('ton chiffre est trop petit');
    } else if (reponse > chiffresAleatoire) {
        alert('ton chiffre est trop grand');
    }
}

alert("Bien ouej t'es moche");

//exo5
alert('ON VA JOUER AU JUSTE PRIX');
let chiffresAleatoire = Math.round(Math.random() * 10);
let reponse;
do {
    reponse = +prompt("rentre un chiffre");
    if (reponse < chiffresAleatoire) {
        alert('ton chiffre est trop petit');
    } else if (reponse > chiffresAleatoire) {
        alert('ton chiffre est trop grand');
    }
} while (reponse != chiffresAleatoire);

alert("Bien ouej t'es moche");

//exo6

//methode farhad
const date = new Date();
let ourYear = date.getFullYear();
let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
let yourTry;
let triesNum = 3;
let answer = ourYear - randomYear;
while (triesNum > 0) {
    yourTry = +prompt(`Si je suis née en ${randomYear}, quel age j'ai aujourd'hui ?`);
    triesNum--;
    if (yourTry == answer) {
        triesNum = 0;
    }
}

if (yourTry == answer) {
    alert("Bonne réponse");
} else {
    alert(`Il te reste ${triesNum} essaies`);
}

//methode andy
const date = new Date();
let ourYear = date.getFullYear();
let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
let question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
let i = 0;

while ((question != ourYear-randomYear) && i < 2) {
    question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
    i++;
}

if (question == ourYear-randomYear) {
    alert('bonne réponse');
} else {
    alert('game over');
}

//exo7
let panierFruits = [];

while (panierFruits.length != 8) {
    panierFruits.push(prompt("Remplissez le panier de fruit, jusqu'a obtenir 8 fruits"));
    alert(panierFruits); //fin
}

let question = prompt("desire tu retirer un fruit ? ");

let panierFruit = [];
let reponse;
let index = false;
let compteur = 0;

while (index == false) {
    if (compteur < 8) {
        reponse = prompt("Donnez moi un fruit");
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.push(reponse);
        compteur++;
    }

    if (compteur == 8) {
        alert(panierFruit);
        reponse = prompt('Voulez vous retirer un fruit ?');
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.splice(panierFruit.indexOf(reponse), 1);

        if (panierFruit.indexOf(reponse) == -1) {
            index = true;
        }
    }
}

alert('merci bonne appétit');
alert(`ceci est le derniere etat de votre panier: ${panierFruit}`);