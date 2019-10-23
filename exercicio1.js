//Crie uma função que dado um intervalo (entre x e y) 
//exiba todos número pares:


function pares(x, y) {  
    if (x %2 != 0){
        x++;
    }
    while (x <= y ){
        console.log('O número é ' + x);
        x +=2;
    }


}


pares(32, 321);