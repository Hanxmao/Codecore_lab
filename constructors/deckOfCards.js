class Card  {
    constructor (val,suit){
        this.val=val
        this.suit=suit
    }

    toString(){

        return console.log(`Card {${this.val} of ${this.suit}}`)
    }
}


class Deck {
    constructor(){
        this.reset()
    }
    reset (){
        this.cards = []
        const suits = ['hearts','spades','clubs','diamonds']
        for (i=0; i<4; i++){
            for (j=1; j<14; j++){
                this.cards.push({'suit':suits[i],'number':j})
            }
        }
    }
    shuffle(){
        let ranNum = parseInt(Math.random()*(this.cards.length-1))
        for (i=0;i<this.cards.length;i++){
            switchVal = this.cards[i]
            this.cards[i] = this.cards[ranNum]
            this.cards[ranNum]=switchVal
        }
    }   
    draw(){
        result = this.cards.shift()
        return result
    }

}

const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');

console.log(aceOfSpades)