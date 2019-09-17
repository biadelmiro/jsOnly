/*Use as seguintes variáveis em sua solução:

    balance - o saldo da conta
    isActive - se a conta está ativa
    checkBalance - se você quer verificar o saldo
**** Para imprimir o saldo da conta com pontos decimais (i.e. 325.00), use o método .toFixed() 
**** e passe o número de pontos decimais que você quer usar. Por exemplo, balance.toFixed(2) retorna 325.00.


    * Thank you. Have a nice day!
    * Your balance is $ .
    * Your account is no longer active.
    * Your account is empty.
    * Your balance is negative. Please contact bank.
*/
var balance = 325.00;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (isActive == false) {
        console.log("Your account is no longer active.");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}