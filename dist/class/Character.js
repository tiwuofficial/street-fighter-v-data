"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Frame_1 = require("./Frame");
const frameCalculation_1 = require("../module/frameCalculation");
class default_1 {
    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {string} enName
     * @param {object[]} frame
     * @param {string[]} words
     */
    constructor(id, name, enName, frames, words = []) {
        this.id = id;
        this.name = name;
        this.enName = enName;
        this.frame = [];
        this.words = words;
        frames.forEach((obj, index) => {
            const frame = Object.assign(obj, { id: index + 1 });
            this.frame.push(new Frame_1.default(frame.id, frame.name, frame.stan, frame.remarks, frame.guard, frame.outbreak, frame.persistence, frame.rigidity, frame.hit, frame.damage, frame.type, frame.command));
        });
    }
    /**
     *
     * @param {string} name
     * @returns { | undefined}
     */
    getFrameByName(name) {
        return this.frame.find(frame => {
            return frame.name === name;
        });
    }
    /**
     *
     * @param id
     * @returns {Frame | undefined}
     */
    getFrameById(id) {
        return this.frame.find(frame => {
            return frame.id === id;
        });
    }
    /**
     *
     * @param {(frame: Frame) => void} callback
     */
    frameForEach(callback) {
        this.frame.forEach(frame => {
            callback(frame);
        });
    }
    /**
     *
     * @param callback
     */
    filterFrame(callback) {
        return this.frame.filter(callback);
    }
    /**
     *
     * @returns
     */
    filterFrameByGuardAvailable() {
        return this.frame.filter((frame) => {
            // 1, -1 判定
            return /^\d+|-\d+$/g.test(frame.guard);
        });
    }
    getRandomFrameByGuardAvailable(number) {
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
    sortedFrameForEach(callback, filterTypes = [], sortKey = "", sortOrder = "asc") {
        let frames = this.frame.slice();
        if (filterTypes.length) {
            frames = frames.filter(frame => {
                return filterTypes.includes(frame.type);
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
                const aValue = frameCalculation_1.frameCalculation(a[sortKey]);
                const bValue = frameCalculation_1.frameCalculation(b[sortKey]);
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
    existsCharacterName(text) {
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
exports.default = default_1;
//# sourceMappingURL=Character.js.map