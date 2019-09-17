/*
    quatro cômodos: salão de baile (ballroom), galeria (gallery), sala de bilhar (billiards room) e sala de jantar (dining room),
    quatro armas: veneno (poison), um troféu (trophy), uma vara de bilhar (pool stick) e uma faca (knife),
    e quatro suspeitos: Sr. Parkes, Senhora Van Cleve, Sra. Sparr e Sr. Kalehoff.

Também sabemos que cada arma corresponde a um cômodo específico, então...

    poison pertence ao ballroom,
    trophy pertence à gallery,
    pool stick pertence à billiards room,
    e knife pertence à dining room.

E sabemos que cada suspeito estava localizado em um cômodo específico na hora do assassinato.

    Mr. Parkes estava na dining room.
    Ms. Van Cleve estava na gallery.
    Mrs. Sparr estava na billiards room.
    Mr. Kalehoff estava no ballroom.

Para ajudar a resolver este mistério, escreva uma combinação de declarações condicionais que:

    defina o valor de weapon (arma) baseado no room (cômodo) e
    defina o valor de solved para true se o valor do room corresponder ao cômodo do suspect (suspeito)
*/

var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
    
} else if (room === "ballroom" && suspect ==="Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
    
} else if (room === "billiards room" && suspect ==="Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else {
    var weapon = "knife";
    var solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}