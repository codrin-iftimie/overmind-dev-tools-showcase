export const CREEP_TYPES = {
  "boss": 0,
  "pawn": 1,
  "tank": 2,
  0: "boss",
  1: "pawn",
  2: "tank"
}
const BASE_HEALTH = [1000, 200, 500]

export function generateCreep({type, multiplier}) {
  return {
    type,
    hp: BASE_HEALTH[type] * multiplier
  }
}
