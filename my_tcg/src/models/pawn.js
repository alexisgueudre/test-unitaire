import EvenManager from "../eventManager"

export default class Pawn extends EvenManager {

  constructor(life, strength, def) {
    super()
    if (Number.isInteger(life, strength, def)) {
      this.life = life,
        this.strength = strength,
        this.def = def;
    }
  }
  getLife() { return this.life };
  getStrength() { return this.strength };
  getDef() { return this.def };

  attack(target) {
    if (target instanceof Pawn) {
      return target.receiveAttack(this)
    }
  }
  receiveAttack(opponent, strikeBack = false) {
    if (strikeBack == true) {
      opponent.life = opponent.life - this.def
      return opponent
    }
    this.life = this.life - opponent.strength
    opponent.life = opponent.life - this.strength
    return opponent,this
  }
}
