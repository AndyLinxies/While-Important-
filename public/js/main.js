//Exo1
// let tableau = ["Andy","Antho","Kev","Oussama","Junior","Farhad","Cactus","Alain","Alexis"];
// let i =0;
// while ( i <9) {
//     console.log("Bonjour "+tableau[i]);
//     i++
// }
//Exo2
// let fruits = ["banane","orange","pamplemousse","pasteque","mangue","cerise"]
// let i=0;
// console.log(fruits);
// while (i<fruits.length) {
//     fruits.splice(0,1)
// }
// console.log(fruits);
//Exo3
// let panierLegumes=["Chou","Laitue","carotte","tomate"];
// let longueur = panierLegumes.length;
// let caisseLegumes=[];
// let i=0;
// while (i<longueur) {
//     caisseLegumes.push(panierLegumes[0])
//     panierLegumes.splice(0,1)
//     i++
// }
// console.log(caisseLegumes);
// console.log(panierLegumes);
//Exo4
// let enigme = prompt("Qu'est ce qui est jaune et qui attend ?");
// while (enigme != "jonathan") {
//     enigme = prompt("Réessayez.Qu'est ce qui est jaune et qui attend ?");
// } 
// alert('Bonne réponse, Félicitations !');
//sort de la boucle quand enigme sera égal à jonathan.La condition ne sera donc plus respectée pour executer le code !
//Exo5
// let enigme;
// do {
//     enigme = prompt("Qu'est ce qui est jaune et qui attend ?");
// } while (enigme!="jonathan");
//Exo6
// let annee=2021;
// let anneeAuto= Math.round(Math.random()*(2018-1970)+1970);
// console.log(anneeAuto); //renvoie une valeur aléatoire entre un max et un min. Voir Doc pour syntax
// let question = prompt(`Si je suis née en ${anneeAuto}, quel age ai-je aujourd’hui ? `);
// i=0;
// while ((question!=2021-anneeAuto)&&i<2) {
//     question = prompt(`Rééssayez.Si je suis née en ${anneeAuto}, quel age ai-je aujourd’hui ? `);
//     i++
// }
// if (question==2021-anneeAuto){
//   alert('Bonne réponse') 
//} else{
//  alert('Game Over !')
//}

//Exo 7//pas fini Voir Correction
// let panier = [];
// while (panier.length<8) {
//     panier.push(prompt('Remplissez le panier jusque 8'))
// }

// console.log(panier);
// let reponse = prompt('Souhaitez-vous retirer un fruit ?')

// panier.forEach((element,u) => {
//     let i = 0;
//     while ((element==reponse)&& i!=2)  {
//         panier.splice(u,1)
//         i++
//     }
    
// });
// console.log('Merci bon app');
// console.log("Votre nouveau panier : "+panier);

