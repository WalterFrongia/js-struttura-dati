var card = {
    name : "",//nome della carta
    launchCost :{ //Creare un oggetto con dentro le caratteristiche che indicano il costo di lancio della carta
        common : 2, 
        white: 3,
        ublue: 1,
        black: 4, 
        red: 0,
        green:0,
    },
    combinedManaCost : function(){ //funzione per calcolare i mana cost
        let sum = 0;
        for (let type in this.launchCost){ //this.launchCost serve per prendere ogni elemento dentro launchCost oggetto
            sum += this.launchCost[type]; //ogni oggetto dentro l'oggetto sommato a tutti i valori degli oggetti
        }
        return sum; //per ritornare la somma della funzione
    }

};
console.log(card);
console.log(card.combinedManaCost());