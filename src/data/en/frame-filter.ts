import FrameFilteres from "../../class/FrameFilteres";
import FrameFilter from "../../class/FrameFilter";

const frameFilteres = new FrameFilteres();
frameFilteres.setFrameFilteres(new FrameFilter("1", "Normal Moves", "normal"));
frameFilteres.setFrameFilteres(new FrameFilter("2", "Jump Moves", "jump"));
frameFilteres.setFrameFilteres(new FrameFilter("3", "Unique Attacks", "unique"));
frameFilteres.setFrameFilteres(new FrameFilter("4", "Normal Throws", "throw"));
frameFilteres.setFrameFilteres(new FrameFilter("5", "V-System", "vsystem"));
frameFilteres.setFrameFilteres(new FrameFilter("6", "Special Moves", "special"));
frameFilteres.setFrameFilteres(new FrameFilter("7", "Critical Art", "ca"));

export { frameFilteres };
