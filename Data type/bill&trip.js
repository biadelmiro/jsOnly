/*Crie uma variável chamada bill e atribua a ela o resultado de 10.25 + 3.99 + 7.15 
Em seguida, crie uma variável chamada tip e atribua a ela o resultado da multiplicação de bill 
por uma taxa tip de 15%. Finalmente, some bill e tip e armazene o resultado em uma variável de nome total.

Exiba o valor de total no console do JavaScript.
DICA: para exibir o valor de total com o símbolo de dólar ($), utilize concatenação de strings. 
Para arredondar para duas casas decimais, utilize o método toFixed(). 
Para utilizar toFixed(), passe o número de casas decimais que você deseja ter. 
Por exemplo, se total for igual a 3.9860, então total.toFixed(2) retornará 3.99. */

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;


console.log('$'+ total.toFixed(2));