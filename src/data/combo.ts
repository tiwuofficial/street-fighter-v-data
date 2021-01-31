import Combo from "../class/Combo";
import Combos from "../class/Combos";
import { characters } from "./character";
import { positions } from "./position";
import { startStatuses } from "./startStatus";

export function getCombosFromLocalStroage(): Combos {
  const combos = new Combos();
  const combosFromLS = JSON.parse(localStorage.getItem("combos"));
  if (combosFromLS) {
    combosFromLS.forEach(comboFromLS => {
      const character = characters.getCharacterById(comboFromLS.characterId);
      if (character) {
        const frames = [];
        comboFromLS.combo.forEach(frameId => {
          const frame = character.getFrameById(parseInt(frameId, 10));
          if (frame) {
            frames.push(frame);
          }
        });

        let startStatus = startStatuses.getStartStatusById(
          comboFromLS.startStatus ? comboFromLS.startStatus : "1"
        );
        if (!startStatus) {
          startStatus = startStatuses.getStartStatusById("1");
        }

        let position = positions.getPositionById(comboFromLS.position ? comboFromLS.position : "1");
        if (!position) {
          position = positions.getPositionById("1");
        }

        combos.pushCombo(
          new Combo(
            comboFromLS.id,
            "",
            character,
            frames,
            startStatus,
            position,
            comboFromLS.damage,
            comboFromLS.stun,
            comboFromLS.title,
            comboFromLS.memo,
            comboFromLS.create
          )
        );
      }
    });
  }
  return combos;
}
