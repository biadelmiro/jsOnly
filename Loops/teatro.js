/*  Se existem 26 fileiras (0 a 25) e 100 assentos (0 a 99) em cada fileira, 
    escreva um loop for aninhado para exibir todas as diferentes combinações de assentos no teatro.

    Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
for (let row = 0; row < 26; row++){
    for(let seat = 0; seat <100; seat++){
        console.log(row + "-" + seat);
    }
}