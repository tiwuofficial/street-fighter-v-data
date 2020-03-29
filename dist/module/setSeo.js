export function setTitle(title) {
    document.querySelector("title").textContent = `${title} | Street Fighter V Matching`;
}
export function setDescription(description) {
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", `${description} - Street Fighter V Matching はストリートファイター V (スト5, ストV) のラウンジを募集したり、キャラやLPやルールでラウンジを探したり、フレーム表や確定反撃(確反)を見ながら対策のメモができたりする、上達のためのサイトです。`);
}
//# sourceMappingURL=setSeo.js.map