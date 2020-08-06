import StartStatuses from "../class/StartStatuses";
import StartStatus from "../class/StartStatus";

const startStatuses = new StartStatuses();

startStatuses.setStartStatuss(new StartStatus("1", "なし"));
startStatuses.setStartStatuss(new StartStatus("2", "カウンターヒット"));
startStatuses.setStartStatuss(new StartStatus("3", "スタン"));
startStatuses.setStartStatuss(new StartStatus("4", "クラカン"));

export { startStatuses };
