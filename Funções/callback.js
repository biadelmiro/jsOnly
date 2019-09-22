// exressão de função catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) { // Max é um parametro onde será comparado com o callback na function hellocat
      catMessage += "meow ";
    }
    return catMessage; //quando chega ao fim da função e é necessário retornar um valor
  };
  
  // declaração de função helloCat aceitando um callback
  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
  }
  
  // passa catSays como função callback
  helloCat(catSays); 