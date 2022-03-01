import Cemetary from "../src/models/cemetary"
import Config from "../src/models/config"

const param = JSON.parse(Config.deck.param)
const cemetary = new Cemetary(param)
describe("number of card in deck", (() => {
  it("test extend for cemetary carte dans le deck", (() => {
    expect(typeof cemetary.getCardsCount()).toBe("number");
  }))
}))