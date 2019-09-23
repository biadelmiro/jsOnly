/* Escreva uma expressão anônima de função que armazena uma função em uma variável de nome "laugh" e 
   retorna como saída o número de "ha"s que você passa como um argumento.

laugh(3);

    Returns: hahaha!
*/

let laugh = function(num){
    let message = "";
    for (x = 0; x < num; x++){
        message += "ha";
    }
    return message +="!";
};

console.log(laugh(3));
