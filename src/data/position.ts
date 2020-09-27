import Positions from "../class/Positions";
import Position from "../class/Position";

const positions = new Positions();

positions.setPositions(new Position("1", "真ん中"));
positions.setPositions(new Position("2", "画面端"));
positions.setPositions(new Position("3", "対空"));

export { positions };
