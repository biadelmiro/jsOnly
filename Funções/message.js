/*  Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 * 
 * Escreva uma função chamada laugh() que possua um parâmetro num, que representa o número de `"ha"s a ser retornado.

    DICA: você provavelmente precisa de um loop para resolver isso!

Aqui está um exemplo da saída e como chamar a função que você escreverá:

console.log(laugh(3));

    Prints: "hahaha!"

 */
function laugh(num){
    var msg ="";
    
    for(x = 0; x < num; x++){
        msg += "ha";
    }
    return msg +="!";
}
console.log(laugh(3));