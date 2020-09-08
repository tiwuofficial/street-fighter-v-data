import MeasuresMemo from "../../class/MeasuresMemos";
import { characters } from "./character";

const measuresMemo = new MeasuresMemo();
measuresMemo.syncFromLS(characters);

export { measuresMemo };
