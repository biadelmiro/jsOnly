/*Escreva uma função que verifique se o 
vetor de habilidades passado possui a habilidade
 "Javascript"e retorna um booleano true/false 
 caso exista ou não.
 */
 
 
 function temHabilidade(skills) {  
    var elemento = skills.indexOf('Javascript');
    if (elemento === -1){
        console.log(false);
    } else {
        console.log(true);
    }
    
    
    }
    
    var skills = ["Javascript", "ReactJS", "React Native"];
    temHabilidade(skills); // true ou false