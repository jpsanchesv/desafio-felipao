let nome = "João"
let xp = 9002

switch(true){
     case xp <= 1000 :
        console.log("O héroi "+nome+" está no nível de Ferro")
        break;
     case xp > 1000 && xp <= 2000 :
        console.log("O héroi "+nome+" está no nível de Bronze")
        break;  
     case xp >= 2001 && xp <= 5000 :
        console.log("O herói "+nome+ " está no nível de Prata")
        break;
     case xp > 5000 && xp <= 7000 :
        console.log("O herói "+nome+ " está no nível de Ouro")
        break;
     case xp > 7000 && xp <= 8000 :
        console.log("O herói "+nome+ " está no nível de Platina")
        break;
     case xp > 8000 && xp <= 9000 :
        console.log("O herói "+nome+ " está no nível de Ascendente")
        break;
     case xp > 9000 && xp <= 10000 :
        console.log("O herói "+nome+ " está no nível de Imortal")
        break;
     case xp >= 10001 :
        console.log("O herói "+nome+ " está no nível de Radiante")
        break;     
}



