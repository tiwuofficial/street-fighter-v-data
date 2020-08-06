import StartStatus from "./StartStatus";
export default class {
    startStatuses: StartStatus[];
    constructor();
    /**
     *
     * @param {StartStatus} StartStatus
     */
    setStartStatuss(StartStatus: StartStatus): void;
    /**
     *
     * @param {(startStatus: ) => void} callback
     */
    startStatussForEach(callback: (startStatus: StartStatus) => void): void;
    /**
     *
     * @param {string} id
     * @returns {StartStatus | undefined}
     */
    getStartStatusById(id: string): StartStatus | undefined;
}
