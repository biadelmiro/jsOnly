/* Se você quisesse fazer um loop sobre a caixa de donut e exibir cada donut (juntamente à sua posição na caixa), 
    iniciaria escrevendo um loop de repetição for para fazer o loop em cada linha da caixa de donuts:*/
    var donutBox = [
        ["glazed", "chocolate glazed", "cinnamon"],
        ["powdered", "sprinkled", "glazed cruller"],
        ["chocolate cruller", "Boston creme", "creme de leche"]
      ];
      
      // aqui, donutBox.length se refere ao número de linhas de donuts
      for (var row = 0; row < donutBox.length; row++) {
        console.log(donutBox[row]);
      }

/*Uma vez que cada linha é uma array de donuts, você, então, 
precisa definir um loop de repetição interno para fazer o loop sobre cada célula nas arrays. */

for (var row = 0; row < donutBox.length; row++) {
    // aqui, donutBox[row].length se refere ao tamanho do array de donut sendo percorrido atualmente
    for (var column = 0; column < donutBox[row].length; column++) {
      console.log(donutBox[row][column]);
    }
  }