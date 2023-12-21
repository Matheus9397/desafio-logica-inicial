//Crie uma variável para armaenar o nome e a quantdiade de experiência de um heroi
//depois utilize uma estrutura de decisao para apresentar alguma das mensagens abaixo:

// se xp for menor que 1000 - ferro 
//se xp for entre 1001 e 2000 - bronze
//se xp for entre 2001 e 5000 - prata ouro 
// se xp for entre 5001 e 8000 - platina diamante
// se xp for entre 8001 e 9000 - ascendente 
// se xp for entre 9001 e 10 000 - imortal
// se xp for maior ou igual a 10001 - radiante


let nomeHeroi = "Joaquim";
let xpHeroi = 50000;
let nivelHeroi = "nenhum"

if(xpHeroi<=1000){
    nivelHeroi = "ferro"
}
else if(xpHeroi>=1001 && xpHeroi<=2000){
    nivelHeroi = "bronze"
}
else if(xpHeroi>=2001 && xpHeroi<=5000){
    nivelHeroi = "prata ouro"
}
else if(xpHeroi>=5001 && xpHeroi<=8000){
    nivelHeroi = "platina diamante"
}
else if(xpHeroi>=8001 && xpHeroi<=9000){
    nivelHeroi = "ascendente"
}
else if(xpHeroi>=9001 && xpHeroi<=10000){
    nivelHeroi = "imortal"
}
else{
    nivelHeroi = "radiante"
}

console.log("O herói de nome: "+nomeHeroi+" está no nível de: "+nivelHeroi);