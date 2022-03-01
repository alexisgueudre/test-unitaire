import Pawn from "../src/models/pawn";

var pawn = new Pawn(10, 3, 4);
var target = new Pawn(10,3,4);

describe("get Life", (() => {
  it("point de vie", (() => {
    expect(typeof pawn.getLife()).toBe("number");
  }))
}))
describe("getDef", (() => {
  it("point de defense", (() => {
    expect(typeof pawn.getDef()).toBe("number");
  }))
}))
describe("getStength", (() => {
  it("point de force", (() => {
    expect(typeof pawn.getStrength()).toBe("number");
  }))
}))

describe("instance of pawn in target from attack", (() => {
  it("target instance of pawn", (() => {
    expect(pawn.attack(target)).toEqual(jasmine.any(Object));
  }))
}))


describe("test attack with strikeBack true", (() => {
  it("counter attack", (() => {
    expect(pawn.receiveAttack(target,true)).toEqual(jasmine.any(Object));
  }))
}))


