class character {
    constructor(name, sanity) {
        this.name = name
        this.sanity = sanity

    }



    trajet(playlist){
        console.log(playlist)
        console.log(John)
        let nbrChangTaxi = 0
        let redLightsNbr = 0
        while(John.sanity > 0 || redLightsNbr < 30){
        
            
            redLightsNbr++

            console.log("feux rouge : " + redLightsNbr)
            console.log("musique jouée : " + music[0])
            if(music[0] == "Anissa - Wejdene"){
                John.sanity -= 1; nbrChangTaxi += 1
                console.log("John a " + John.sanity + " pv.")
                console.log("John a changé " + nbrChangTaxi + " fois de taxi.")
            }
            if(John.sanity === 0){
                console.log("John a fais boum")
                break
            }
            if(redLightsNbr === 30){
                console.log("John a changé " + nbrChangTaxi + " fois de taxi pour arriver chez lui.")
                break
            }else{
                continue
            }
        }
    }
}

let max = 5
let min = 0
let music = ["Anissa - Wejdene", "Billie Jean - Michael Jackson", "Qui dit mieux - Gringe", "Big Poppa - The Notorious Big", "Without Me - Eminem"]
var John = new character("John", 10)
console.log(max)
console.log(min)


John.trajet(music)
