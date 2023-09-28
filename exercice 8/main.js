class pokemon {
    constructor(name, pv, attack, def) {
        this.name = name
        this.pv = pv
        this.attack = attack
        this.def = def
    }

    attackPokemon(truc){
        truc.pv -= this.attack - truc.def
    }
}

var tours = 0
var Ectoplasma = new pokemon("Ectoplasma", 324, 251, 240)
var Nidorino = new pokemon("Nidorino", 326, 267, 234)


console.log(Ectoplasma)
console.log(Nidorino)



while(Ectoplasma.pv > 0 || Nidorino.pv >0){
    tours++
    console.log("Tour " + tours)
    console.log("Ectoplasma utilise ball'Ombre")
    console.log(Nidorino.pv +" - " + Ectoplasma.attack)
    Ectoplasma.attackPokemon(Nidorino)
    console.log(Nidorino.pv)
    if(Nidorino.pv <= 0){
        console.log("Ectoplasma a gagné!")
        break
    }
    
    console.log("Nidorino utilise Dard-venin")
    console.log(Ectoplasma.pv +" - " + Nidorino.attack)
    Nidorino.attackPokemon(Ectoplasma)
    console.log(Ectoplasma.pv)
    if(Ectoplasma.pv <= 0){
        console.log("Nidorino a gagné!")
        break
    } else {
        continue
    }

}

