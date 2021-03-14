import FrameSorts from "../../class/FrameSorts";
import FrameSort from "../../class/FrameSort";

const frameSorts = new FrameSorts();

frameSorts.setFrameSorts(new FrameSort("0", "Default", "", "asc"));
frameSorts.setFrameSorts(new FrameSort("1", "In order of fast Startup", "outbreak", "asc"));
frameSorts.setFrameSorts(new FrameSort("2", "In order of late Startup", "outbreak", "desc"));
frameSorts.setFrameSorts(
  new FrameSort("3", "Frame at hit is in order of advantage", "hit", "desc")
);
frameSorts.setFrameSorts(new FrameSort("4", "Frame on hit in order of disadvantage", "hit", "asc"));
frameSorts.setFrameSorts(
  new FrameSort("5", "Frame at guard is in order of advantage", "guard", "desc")
);
frameSorts.setFrameSorts(
  new FrameSort("6", "Frame at guard is in order of disadvantage", "guard", "asc")
);

export { frameSorts };
