class generica{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo  
    }

    atacar(){
        let ataque
        if(this.tipo == "mago"){
            ataque = "magia"
        } else if(this.tipo == "guerreiro"){
            ataque = "espada"
        } else if(this.tipo == "monge"){
            ataque = "artes maciais"
        } else if(this.tipo == "ninja") {
            ataque = "shuriken"
        }  
        
       console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

function main (){
    let guerreiro = new generica("João", "20 anos", "guerreiro")
    let mago = new generica("Pedro", "20 anos", "mago")
    let monge = new generica("Paulo", "120 anos", "monge")
    let ninja = new generica("Afonso", "33 anos", "ninja")

    guerreiro.atacar()
    mago.atacar()
    monge.atacar()
    ninja.atacar()
}

main()

