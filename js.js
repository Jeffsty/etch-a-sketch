for (let i = 0; i < 16 * 16; i++) {
    let container = document.querySelector("#container");
    let content = document.createElement("div");
    container.appendChild(content);
    content.classList.add("content");
    content.textContent = ".";
}

document.getElementById("container").addEventListener("mouseover", mouseOver);
document.getElementById("container").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("container").style.backgroundColor = "black";
  }

function mouseOut() {
    document.getElementById("container").style.backgroundColor = "white";
}
