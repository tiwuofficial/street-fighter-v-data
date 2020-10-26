import Frame from "./Frame";
import { frameCalculation } from "../module/frameCalculation";

export default class {
  id: string;
  name: string;
  enName: string;
  frame: Frame[];
  words: string[];

  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {string} enName
   * @param {object[]} frame
   * @param {string[]} words
   */
  constructor(id: string, name: string, enName: string, frames: object[], words: string[] = []) {
    this.id = id;
    this.name = name;
    this.enName = enName;
    this.frame = [];
    this.words = words;

    frames.forEach((obj, index) => {
      const frame = Object.assign(obj, { id: index + 1 }) as Frame;
      this.frame.push(
        new Frame(
          frame.id,
          frame.name,
          frame.stan,
          frame.remarks,
          frame.guard,
          frame.outbreak,
          frame.persistence,
          frame.rigidity,
          frame.hit,
          frame.damage,
          frame.type,
          frame.vtrigger,
          frame.command,
          frame.zeku ? frame.zeku : ""
        )
      );
    });
  }

  /**
   *
   * @param {string} name
   * @returns { | undefined}
   */
  getFrameByName(name: string): Frame | undefined {
    return this.frame.find(frame => {
      return frame.name === name;
    });
  }

  /**
   *
   * @param id
   * @returns {Frame | undefined}
   */
  getFrameById(id: number): Frame | undefined {
    return this.frame.find(frame => {
      return frame.id === id;
    });
  }

  /**
   *
   * @param {(frame: Frame) => void} callback
   */
  frameForEachByVtrigger(vtrigger: 1 | 2, callback: (frame: Frame) => void): void {
    const filteredFrame = this.filterFrameByVtrigger(vtrigger);
    filteredFrame.forEach(frame => {
      callback(frame);
    });
  }

  /**
   *
   * @param callback
   */
  filterFrame(callback: (frame: Frame) => boolean): Frame[] {
    return this.frame.filter(callback);
  }

  /**
   *
   * @param vtrigger
   */
  filterFrameByVtrigger(vtrigger: 1 | 2): Frame[] {
    return this.filterFrame(frame => {
      return frame.vtrigger === vtrigger;
    });
  }

  /**
   *
   * @returns
   */
  filterFrameByGuardAvailable(): Frame[] {
    return this.filterFrame((frame: Frame) => {
      // 1, -1 判定
      return /^\d+|-\d+$/g.test(frame.guard);
    });
  }

  getRandomFrameByGuardAvailable(number: number): Frame[] {
    const frameByGuardAvailable = this.filterFrameByGuardAvailable();
    const randomFrames = [];
    while (randomFrames.length < number && frameByGuardAvailable.length > 0) {
      // 配列からランダムなキーを選ぶ
      const rand = Math.floor(Math.random() * frameByGuardAvailable.length);
      // 返却する配列に追加する
      randomFrames.push(frameByGuardAvailable[rand]);
      // もとの配列から削除する
      frameByGuardAvailable.splice(rand, 1);
    }
    return randomFrames;
  }

  /**
   *
   * @param {(frame: ) => void} callback
   * @param {string} sortKey
   * @param {string} sortOrder
   */
  sortedFrameForEach(
    vtrigger: 1 | 2,
    callback: (frame: Frame, character: this) => void,
    filterTypes = [],
    sortKey = "",
    sortOrder = "asc"
  ): void {
    let frames = this.filterFrameByVtrigger(vtrigger);

    // [""] が来たときに消すため
    const trimFilterTypes = filterTypes.filter(Boolean);

    if (trimFilterTypes.length) {
      frames = frames.filter(frame => {
        return trimFilterTypes.includes(frame.type);
      });
    }

    if (sortKey) {
      frames.sort((a, b) => {
        // todo リファクタリングしないとやばし

        // a が空のときは a の並び順は後ろにする
        if (a[sortKey] === "") {
          return 1;
        }

        if (a[sortKey] === "D") {
          // a が D かつ降順のとき a を前にする
          if (sortOrder === "desc") {
            return -1;
          }

          // a が D かつ b が空のときは a を前にする
          if (b[sortKey] === "") {
            return -1;
          }
          // 昇順で、a が D のときは a の並び順は後ろにする
          return 1;
        }

        if (a[sortKey] === "GB") {
          // a が D かつ降順のとき a を前にする
          if (sortOrder === "desc") {
            return -1;
          }

          // a が GB かつ b が空のときは a を前にする
          if (b[sortKey] === "") {
            return -1;
          }
          // 昇順で、a が GB のときは a の並び順は後ろにする
          return 1;
        }

        // b が空のときは b の並び順は後ろにする
        if (b[sortKey] === "") {
          return -1;
        }

        // b がDのときは b の並び順は後ろにする
        if (b[sortKey] === "D") {
          // b が D かつ降順のとき a を後ろにする
          if (sortOrder === "desc") {
            return 1;
          }

          // b が D かつ a が空のときは a を前にする
          if (a[sortKey] === "") {
            return 1;
          }
          return -1;
        }

        // b が GB のときは a の並び順は後ろにする
        if (b[sortKey] === "GB") {
          // b が GB かつ降順のとき a を後ろにする
          if (sortOrder === "desc") {
            return 1;
          }
          // b が D かつ a が空のときは a を前にする
          if (a[sortKey] === "") {
            return 1;
          }
          return 1;
        }

        const aValue = frameCalculation(a[sortKey]);
        const bValue = frameCalculation(b[sortKey]);

        if (sortOrder === "asc") {
          return aValue - bValue;
        }

        return bValue - aValue;
      });
    }

    frames.forEach(frame => {
      callback(frame, this);
    });
  }

  /**
   *
   * @param {string} text
   * @returns {boolean}
   */
  existsCharacterName(text: string): boolean {
    let exists = false;
    this.words.forEach(word => {
      if (text.indexOf(word) > 0) {
        exists = true;
      }
    });

    if (text.indexOf(this.name) > 0) {
      exists = true;
    }
    return exists;
  }
}
