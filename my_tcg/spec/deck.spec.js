import Deck from "../src/models/deck"
import Config from "../src/models/config";

var deck = new Deck(JSON.parse(Config.deck.param));

describe("object cards", (() => {
  it("paquet bien melanger", (() => {
    expect(deck.shuffle()).toBe(true);
  }))
}))

describe("add cards", (() => {
  it("ajouter a la position donnée", (() => {
    expect(deck.insertAt("zigourat",3)).toBe(true);
  }))
  it("ajouter a la position non donné", (() => {
    expect(deck.insertAt("zigourat")).toBe(true);
  }))
  it("aucune carte ajouter", (() => {
    expect(deck.insertAt()).toBe(false);
  }))
}))

describe("draw cards", (() => {
  it("premiere carte ", (() => {
    expect(typeof deck.draw()).toBe("string");
  }))
}))
describe("number of card in deck", (() => {
  it("nombre de carte ", (() => {
    expect(typeof deck.getCardsCount()).toBe("number");
  }))
}))
