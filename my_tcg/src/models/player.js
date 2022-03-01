import Config from './config';
import ModelFactory from './factory';
import Pawn from "./pawn"
import Deck from './deck';
import Boards from "./board"
import Hands from './hand';
import Cemetary from "./cemetary";
export default class Player extends Pawn{

    constructor(config) {
        super()
        //this.type = config.type;
        // this.deck = ModelFactory.get('deck');
        // this.pawn = ModelFactory.get('pawn')
        // this.boards = ModelFactory.get('board')
        // this.hand = ModelFactory.get('hand')
        // this.cemetary = ModelFactory.get('cemetary')
        this.deck = new Deck(JSON.parse(Config.deck.param));
        this.hand = new Hands(JSON.parse(Config.deck.param))
        this.board = new Boards(JSON.parse(Config.deck.param));
        this.cemetary = new Cemetary(JSON.parse(Config.deck.param));
        this.pawn = new Pawn(JSON.parse(Config.pawn.param))
    }

    shuffle(type) {
        if (type === "deck") {
            this.deck.shuffle()
            return true
        }
        if (type === "cemetary") {
            this.deck.shuffle()
            return true
        }
        else {
            return false
        }
    }

    draw() {
        var card = this.deck.draw();
        if (card !== undefined && card !== null) {
            this.hand.addCard(card);
            return card
        } else {
            false
        }
    }

    playCard(position) {
        var hand = this.hand.cards
        if (hand && Number.isInteger(position)) {
            const cardDeleteHand = hand.splice(hand[position], 1)
            this.board.addCard(cardDeleteHand);
            return true
        }
        else {
            return false
        }
    }

    discard(position) {
        var board = this.board.cards
        if (board && Number.isInteger(position)) {
            const cardDeleteBoard = board.splice(position, 1)
            this.cemetary.insertAt(cardDeleteBoard);
            return true
        }else {
            return false
        }
    }
    attack(position,target){
        var board = this.board.cards
        var pawn = this.pawn;
        if (Number.isInteger(position),target) {
            console.log(pawn.attack(board[position]));
            console.log(pawn.receiveAttack(target));
        } else {
            return false
        }
    }
}