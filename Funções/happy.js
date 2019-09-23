/* Chame a função emotions() para que ela imprima a saída que você vê abaixo, mas, 
   em vez de passar a função laugh() como um argumento, passa uma expressão de função inline.

   Prints: "I am happy, haha!" */

   // don't change this code
function emotions(myString, myFunc) { //ele cria uma função chamada emotions com dois parametros.
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions ("happy", function laugh(num){ // ele chama novamente a função e substitui os parametros. my string por "happy"
// e myFunc por uma função chamada laugh (num) que tem num como parametro. 
    var message = "";
    for (var i=1; i <= num; i++){
    message +="ha";
    }
    return message + "!";
    }
);