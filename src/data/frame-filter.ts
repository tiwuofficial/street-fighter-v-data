import FrameFilteres from "../class/FrameFilteres";
import FrameFilter from "../class/FrameFilter";

const frameFilteres = new FrameFilteres();
frameFilteres.setFrameFilteres(new FrameFilter("1", "通常技", "normal"));
frameFilteres.setFrameFilteres(new FrameFilter("2", "ジャンプ技", "jump"));
frameFilteres.setFrameFilteres(new FrameFilter("3", "特殊技", "unique"));
frameFilteres.setFrameFilteres(new FrameFilter("4", "通常投げ", "throw"));
frameFilteres.setFrameFilteres(new FrameFilter("5", "Vシステム", "vsystem"));
frameFilteres.setFrameFilteres(new FrameFilter("6", "必殺技", "special"));
frameFilteres.setFrameFilteres(new FrameFilter("7", "クリティカルアーツ", "ca"));

export { frameFilteres };
