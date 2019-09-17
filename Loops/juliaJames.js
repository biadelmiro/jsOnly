/*Escreva um loop while que:

    Faça um loop dos números 1 a 20
    Se o número for divisível por 3, exiba "Julia"
    Se o número for divisível por 5, exiba "James"
    Se o número for divisível por 3 e 5, exiba "JuliaJames"
    Se o número não for divisível por 3 nem 5, exiba o número
*/
let x = 1;

while(x <= 20){
    // check divisibility
    if (x % 3 === 0){
        console.log ("Julia");
    } else if (x % 5 === 0){
        console.log ("James");
    } else if (x % 5 === 0 && x % 3 === 0){
        console.log ("JuliaJames");
    } else {
        console.log(x);
    }
    x++;
}
