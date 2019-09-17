/*Escreva uma série de declarações condicionais que:

    imprima "not a group" se o número de músicos for menor ou igual a 0
    imprima "solo" se o número de músicos for igual a 1
    imprima "duet" se o número de músicos for igual a 2
    imprima "trio" se o número de músicos for igual a 3
    imprima "quartet" se o número de músicos for igual a 4
    imprima "this is a large group" se o número de músicos for maior do que 4
*/

var musicians = 3;

// your code goes here
if (musicians == 1){
    console.log('solo');
} else if (musicians == 2){
    console.log('duet');
} else if (musicians == 3){
    console.log('trio');
} else if (musicians == 4){
    console.log('quartet');
} else if (musicians > 4){
    console.log('this is a large group');
} else {
    console.log('Not a group');
}