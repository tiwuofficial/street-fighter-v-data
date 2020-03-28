import FrameSorts from "../class/FrameSorts";
import FrameSort from "../class/FrameSort";

const frameSorts = new FrameSorts();

frameSorts.setFrameSorts(new FrameSort("0", "デフォルト", "", "asc"));
frameSorts.setFrameSorts(new FrameSort("1", "発生の早い順", "outbreak", "asc"));
frameSorts.setFrameSorts(new FrameSort("2", "発生の遅い順", "outbreak", "desc"));
frameSorts.setFrameSorts(new FrameSort("3", "ヒット時のフレームが有利順", "hit", "desc"));
frameSorts.setFrameSorts(new FrameSort("4", "ヒット時のフレームが不利順", "hit", "asc"));
frameSorts.setFrameSorts(new FrameSort("5", "ガード時のフレームが有利順", "guard", "desc"));
frameSorts.setFrameSorts(new FrameSort("6", "ガード時のフレームが不利順", "guard", "asc"));

export { frameSorts };
