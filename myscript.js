var card = {
    name : "Troll Ascetic",//nome della carta
    launchCost :{ //Creare un oggetto con dentro le caratteristiche che indicano il costo di lancio della carta
        common :0, 
        white: 1,
        ublue: 0,
        black: 0, 
        red: 0,
        green:2,
    },
    cardType : "creature", //indica il tipo della carta 
    subType : "Troll Shaman", //sottotipo, le carte possono avere più tipilogie

    expansion : {       //espansione carta in base alle diverse edizioni
        expansionID :"", 
        name : "",
        rarity : "",
        other: "",
    },
    flauvourText:{
        quote: "Non è una coincidenza che i troll più antichi siano anche quelli più arrabbiati.", //quote (citazione)
        author:"Puddnhead",
    },
    abilities :[  //array di oggetti
        {
            launchCost :{ 
                common :0, 
                white: 1,
                ublue: 0,
                black: 0, 
                red: 0,
                green:2,
            },
            description: "Hexproof (This creature can't be the target of spells or abilities your opponents control",
        },
        {
            launchCost :{ 
                common :0, 
                white: 1,
                ublue: 0,
                black: 0, 
                red: 0,
                green:2,
            },
            description: "Hexproof (This creature can't be the target of spells or abilities your opponents control",
        },
        {
            launchCost :{ 
                common :0, 
                white: 1,
                ublue: 0,
                black: 0, 
                red: 0,
                green:2,
            },
            description: "Hexproof (This creature can't be the target of spells or abilities your opponents control",
        },     
    ],

    //illustratore ha id e nome
    illustrator:{
        id: 125,
        name: "Puddnhead",
    },
    
    collectionNumber : 145, //numero carta nella collezione
    constitution: 3,
    strength:2,
    borderHue:"goldenrod", //indicaa il colore della carta


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