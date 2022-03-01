import Board from "../src/models/board"
import Config from "../src/models/config"

const param = JSON.parse(Config.hand.param)
const board = new Board({param})
describe("number of card in deck", (() => {
  it("test extend for board carte dans le deck", (() => {
    expect(typeof board.getCardsCount()).toBe("number");
  }))
}))