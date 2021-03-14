import Positions from "../../class/Positions";
import Position from "../../class/Position";

const positions = new Positions();

positions.setPositions(new Position("1", "Middle"));
positions.setPositions(new Position("2", "Screen edge"));
positions.setPositions(new Position("3", "Anti-aircraft"));

export { positions };
