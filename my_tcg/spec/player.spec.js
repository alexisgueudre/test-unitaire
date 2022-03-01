import Player from "../src/models/player";
var player = new Player();

describe("object cards for players", (() => {
  it("paquet bien melanger deck", (() => {
    expect(player.shuffle("deck")).toBe(true);
  }))
}))
describe("object cards for players", (() => {
  it("paquet bien melanger cemetary", (() => {
    expect(player.shuffle("cemetary")).toBe(true);
  }))
}))
describe("object cards for players", (() => {
  it("paquet pas melanger inexistant", (() => {
    expect(player.shuffle("inconnue")).toBe(false);
  }))
}))
describe("draw for players", (() => {
  it("carte et ajouter a la main", (() => {
    expect(typeof player.draw()).toBe("object");
  }))
}))
describe("playcards for players if true", (() => {
  it("carte jouer ajouter au board", (() => {
    player.draw();
    expect(player.playCard(0)).toBe(true);
  }))
}))
describe("playcards for players if false", (() => {
  it("error", (() => {
    player.draw();
    expect(player.playCard("sfd")).toBe(false);
  }))
}))

describe("discard for players if true", (() => {
  it("good", (() => {
    player.playCard(1);
    expect(player.discard(1)).toBe(true);
  }))
}))
describe("discard for players if false", (() => {
  it("error", (() => {
    player.playCard(0);
    expect(player.discard("sdqd")).toBe(false);
  }))
}))
describe("attack for players if true", (() => {
  it("good", (() => {
    expect(player.attack(1,1)).toBe(true);
  }))
}))
describe("attack for players if false", (() => {
  it("error", (() => {
    expect(player.attack(1,1)).toBe(false);
  }))
}))