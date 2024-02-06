class classeDeHeroi{
    constructor(tipoDeClasse,tipoDePoder){
        this.tipoDeClasse = tipoDeClasse
        this.tipoDePoder = tipoDePoder
    }
    escrever(){
        console.log(`O ${this.tipoDeClasse} atacou usando ${this.tipoDePoder}`)
    }
}

let guerreiro = new classeDeHeroi("Guerreiro", "espada")

let ninja = new classeDeHeroi("Ninja", "shuriken")

guerreiro.escrever()