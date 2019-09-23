/*James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

mas James tinha isto:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

Usando somente o método splice(), insira as cores que faltam na array e remova a cor "Blackberry", seguindo estes passos:

    Remova "Blackberry"
    Adicione "Yellow" e "Green"
    Adicione "Purple"
*/


var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(2,1);
rainbow.splice(2,0, "Yellow", "Green");
rainbow.push("Purple");

console.log(rainbow);