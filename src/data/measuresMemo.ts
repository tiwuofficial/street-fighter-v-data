import MeasuresMemos from "../class/MeasuresMemos";
import { characters } from "./character";

export function getMeasuresMemosFromLocalStroage(): MeasuresMemos {
  const measuresMemos = new MeasuresMemos();
  measuresMemos.syncFromLS(characters);
  return measuresMemos;
}
