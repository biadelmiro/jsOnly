/*  Um fatorial é calculado multiplicando um número por todos os números abaixo dele. 
    Por exemplo, 3! ou "3 fatorial" é 3 * 2 * 1 = 6


*/
let solution = 12;  
for (var fact = 1; fact < 12; fact ++) {
  solution *= fact;
}
 console.log(solution);