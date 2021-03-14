import StartStatuses from "../../class/StartStatuses";
import StartStatus from "../../class/StartStatus";

const startStatuses = new StartStatuses();

startStatuses.setStartStatuss(new StartStatus("1", "None"));
startStatuses.setStartStatuss(new StartStatus("2", "Counter hit"));
startStatuses.setStartStatuss(new StartStatus("3", "Stan"));
startStatuses.setStartStatuss(new StartStatus("4", "Crash counter"));

export { startStatuses };
