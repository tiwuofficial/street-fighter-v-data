import StartStatus from "./StartStatus";

export default class {
  startStatuses: StartStatus[];

  constructor() {
    this.startStatuses = [];
  }

  /**
   *
   * @param {StartStatus} StartStatus
   */
  setStartStatuss(StartStatus: StartStatus): void {
    this.startStatuses.push(StartStatus);
  }

  /**
   *
   * @param {(startStatus: ) => void} callback
   */
  startStatussForEach(callback: (startStatus: StartStatus) => void): void {
    this.startStatuses.forEach(startStatus => {
      callback(startStatus);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {StartStatus | undefined}
   */
  getStartStatusById(id: string): StartStatus | undefined {
    return this.startStatuses.find(StartStatus => {
      return StartStatus.id === id;
    });
  }
}
