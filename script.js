let Prenom = prompt('Entrez votre Prénom');
let Age = prompt('Entrez votre age');


if (Prenom == 'Sofiane' && Age > 18){
    console.log('Welcome');
}else if (Prenom.length == Age){
    console.log('vous avez le meme nombre de lettre que votre age');
} else if (Age > 30 && Age < 50){
    console.log("vous etes dans la tranche d'Age");
} else if (Prenom == 'Abby' || Prenom == 'Paul' && Age < 70){
    console.log('Bienvenu jeune', Prenom, 'agée de', Age);
}

