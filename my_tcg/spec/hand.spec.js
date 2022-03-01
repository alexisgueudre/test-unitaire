import Hands from "../src/models/hand";
var card =
  [{
    1: "devil",
  }]
var hands = new Hands({card:card});

describe("add Card in Hand", (() => {
  it("carte ajouter", (() => {
    expect(hands.addCard(card)).toBe(true);
  }))
}))
describe("remove Card in Hand", (() => {
  it("carte suprimer ajouter", (() => {
    expect(typeof (hands.removeCard(1))).toBe("object");
  }))
}))
describe("remove Card in Hand", (() => {
  it("liste des carte dans la main", (() => {
    expect(Array.isArray(hands.getAllCards())).toBe(true);
  }))
}))
describe("number of card in deck", (() => {
  it("nombre de carte ", (() => {
    expect(typeof hands.getCardsCount()).toBe("number");
  }))
}))

