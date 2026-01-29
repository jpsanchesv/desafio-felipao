
function nivel(vitoria, derrota){
    let saldoRankeada = vitoria - derrota
             switch (true){
                case saldoRankeada < 10 :
                    return "Ferro"
                case saldoRankeada > 10 && saldoRankeada < 21 :
                    return "Bronze";
                case saldoRankeada > 20 && saldoRankeada < 51 :
                    return "Prata"
                case saldoRankeada > 50 && saldoRankeada < 81 :
                    return "Ouro"
                case saldoRankeada > 80 && saldoRankeada < 91 :
                    return "Diamante"
                case saldoRankeada > 90 && saldoRankeada < 101: 
                    return "Lendário"
                default : 
                    return "Imortal"
                
            }
           
        }

    function main(){
         let vitorias = 81
         let derrotas = 1
         let total = vitorias - derrotas  
         let resultado = nivel

        console.log("O Herói tem saldo de "+ total+ " está no nível de "+resultado(vitorias, derrotas))
    }    
    
    main()