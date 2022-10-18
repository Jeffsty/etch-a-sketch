for (let i = 0; i < 16 * 16; i++) {
    let container = document.querySelector("#container");
    let content = document.createElement("div");
    container.appendChild(content);
    content.classList.add("content");
    content.textContent = ".";
}
