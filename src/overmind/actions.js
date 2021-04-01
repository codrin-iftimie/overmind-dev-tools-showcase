import { CREEP_TYPES, generateCreep } from "../domain/creep";
import CycleManager from "./effects/CycleManager"

export function initialize({state, effects, actions}) {
  effects.waveCycle.initialize(actions.startWave)
}

export function spawnCreep({state}, {level, type}) {
  state.creeps.push(generateCreep({type, multiplier: level / 10}));
}

export function startWave({state, actions}, wave) {
  state.currentWave = wave;
  const spawnCycle = new CycleManager({timer: 200});
  spawnCycle.initialize((index) => {
    if (index > 9) {
      return;
    }
    if (index < 5) {
      actions.spawnCreep({type: CREEP_TYPES.pawn, level: wave})
      return;
    }

    if (index < 8) {
      actions.spawnCreep({type: CREEP_TYPES.tank, level: wave})
      return;
    }

    actions.spawnCreep({type: CREEP_TYPES.boss, level: wave})
  })
}
