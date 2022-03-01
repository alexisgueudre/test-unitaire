import config from "./config";

export default class Deck {
    constructor(config) {
        this.cards = config.cards
    }

    shuffle() {
        if (this.cards) {
            for (var i = 0; i < 1000000; i++) {
                var arr = this.cards
                randomize(arr);
                return true
            }
        } else {
            return false
        }
        function randomize(arr) {
            for (var i = arr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1)); //random index
                [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
            }
        }
    }

    insertAt(card, i) {
        if (card === undefined || card === null) {
            return false
        }
        if (card && Number.isInteger(i) && i !== undefined || i !== null) {
            this.cards.splice(i, 0, card)
            return true
        } else {
            this.cards.splice(this.cards.length - 1, 0, card)
            return true
        }
    }

    draw() {
        if (this.cards.length !== 0) {
            const firstCard = this.cards;
            const cardDelete = this.cards.splice(firstCard[1], 1)[0]
            return cardDelete;
        } else {
            return false
        }
    }

    getCardsCount() {
        return this.cards.length
    }


}