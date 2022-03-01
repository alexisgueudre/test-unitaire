export default class Hands {

  constructor(config) {
    if (this.limit === undefined || this.limit === null) {
      this.limit = 7;
    } else {
      this.limit = config.limit
    }
    this.cards = []
  }

  addCard(card) {
    if (card) {
      this.cards.push(card)
      return true;
    }
    else {
      return false
    }
  }

  removeCard(i) {
    if (Number.isInteger(i)) {
       const deleteCard = this.cards.slice(i, 1)
       return deleteCard
    } else {
      return false
    }
  }

  getAllCards() {
      return this.cards
  }

  getCardsCount() {
      return this.cards.length
  }
}