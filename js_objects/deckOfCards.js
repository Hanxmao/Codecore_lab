//after reading the answer then rewrite the solution as follow
deck = {
    cards: [],
    reset (){
        this.cards = []
        const suits = ['hearts','spades','clubs','diamonds']
        for (i=0; i<4; i++){
            for (j=1; j<14; j++){
                this.cards.push({'suit':suits[i],'number':j})
            }
        }
    },
    shuffle(){
        let ranNum = parseInt(Math.random()*(this.cards.length-1))
        for (i=0;i<this.cards.length;i++){
            switchVal = this.cards[i]
            this.cards[i] = this.cards[ranNum]
            this.cards[ranNum]=switchVal
        }
    },
    draw(){
        result = this.cards.shift()
        return result
    }
}



// answer:
// const deck = {
//     cards: [],

//     reset() {
//         this.cards = []
//         const suitArr = ["clubs", "spades", "hearts", "diamonds"]

//         for(let suit=0; suit < suitArr.length; suit++) {
//             for(let number = 1; number < 14; number++){
//                 this.cards.push({
//                     "suit": suitArr[suit],
//                     "number": number 
//                 })
//             }
//         }
//     },

//     shuffle(){
//         if(this.cards.length > 0) {
//             for(let index = 0; index < this.cards.length; index++) {
//                 const randomNum = parseInt(Math.random() * (this.cards.length - 1))
//                 const temp = this.cards[index]
//                 this.cards[index] = this.cards[randomNum]
//                 this.cards[randomNum] = temp
//             }
//         } else {
//             return 'Please set the card first!'
//         }
//     },

//     draw() {
//         if(this.cards.length > 0) {
//             const topCard = this.cards[0]
//             this.cards = this.cards.slice(1, this.cards.length -1)
//             return topCard 
//         } else {
//             return 'Please set the card first!'
//         }
//     }
// }