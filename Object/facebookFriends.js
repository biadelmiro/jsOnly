/*Crie um objeto chamado facebookProfile. O objeto deve ter três propriedades:

    seu nome (name)
    o número de amigos (friends) que você tem e
    uma array de mensagens (messages) que você postou (como strings)

O objeto deve também possuir quatro métodos:

    postMessage(message) - adiciona uma nova mensagem em formato de string na array
    deleteMessage(index) - remove a mensagem correspondente ao índice fornecido
    addFriend() - aumenta a contagem de amigos em 1
    removeFriend() - diminui a contagem de amigos em 1
*/
var facebookProfile ={
    name:"bea",
    friends: 20,
    messages: ["oi", "ola"],
    postMessage: function postMessage(message){
        return facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index){
        return facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend(){
        return facebookProfile.friends++;
        },
    removeFriend: function removeFriend(){
        return facebookProfile.friends--;
    },
    
    };
    