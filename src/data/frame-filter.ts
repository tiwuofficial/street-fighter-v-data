import FrameFilteres from "../class/FrameFilteres";
import FrameFilter from "../class/FrameFilter";

const frameFilteres = new FrameFilteres();
frameFilteres.setFrameFilteres(new FrameFilter("0", "指定なし"));
frameFilteres.setFrameFilteres(new FrameFilter("1", "通常技"));
frameFilteres.setFrameFilteres(new FrameFilter("2", "ジャンプ技"));
frameFilteres.setFrameFilteres(new FrameFilter("3", "特殊技"));
frameFilteres.setFrameFilteres(new FrameFilter("4", "通常投げ"));
frameFilteres.setFrameFilteres(new FrameFilter("5", "Vシステム"));
frameFilteres.setFrameFilteres(new FrameFilter("6", "必殺技"));
frameFilteres.setFrameFilteres(new FrameFilter("7", "クリティカルアーツ"));

export { frameFilteres };
