class heroi {
    constructor(nomeDoHeroi, idadeDoHeroi, classeDoHeroi, ataqueDaClasse) {
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.classeDoHeroi = classeDoHeroi
        this.ataqueDaClasse = ataqueDaClasse

    }

    atacar() {
        if (this.classeDoHeroi === "Guerreiro") {
            this.ataqueDaClasse = "a espada"
        }

        else if (this.classeDoHeroi === "Monje") {
            this.ataqueDaClasse = "golpes de artes marciais"
        }

        else if (this.classeDoHeroi === "Ninja") {
            this.ataqueDaClasse = "uma shuriken"
        }

        else { this.ataqueDaClasse = "algo desconhecido" }

        console.log(`${this.nomeDoHeroi}, o ${this.classeDoHeroi} atacou usando ${this.ataqueDaClasse}`)
    }


    informar() {
        console.log(`${this.nomeDoHeroi}, o ${this.classeDoHeroi} tem ${this.idadeDoHeroi} anos de idade!`)
    }
}

let heroiEscolhido = new heroi("Zack", 25, "Guerreiro")


heroiEscolhido.atacar()

heroiEscolhido.informar()