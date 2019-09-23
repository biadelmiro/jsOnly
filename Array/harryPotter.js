/* No Romance de Harry Potter, as crianças que frequentam a Escola de Bruxaria e 
Feitiçaria de Hogwarts pertencem a uma das quatro casas: Gryffindor, Hufflepuff, Ravenclaw ou Slytherin. 
Todo ano, as casas montam um time de quadribol de sete jogadores para competir na cobiçada Copa de Quadribol.

Considere a seguinte array:

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", 
            "George Weasley", "Fred Weasley", "Harry Potter"];
Crie uma função chamada hasEnoughPlayers(), 
que recebe a array team como argumento e retorna true ou false, 
dependendo de a array ter pelo menos sete jogadores. */

function hasEnoughPlayers(x){
    if (x.length >= 7){
       return true;
    } else {
       return false;
    }
}
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
