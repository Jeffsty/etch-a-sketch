/* for (let i = 0; i < 16 * 16; i++) {
    let container = document.querySelector("#grid");
    let content = document.createElement("div");
    container.appendChild(content);
    content.classList.add("content");
    content.textContent = ".";
} */

const grid = document.querySelector(".grid");
// try it again but without arrow function, to prove understanding
createGrid =() => {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "black";
        })
        grid.appendChild(div);
    }

}; 



  /*Try this way tomorrow ^^^
  */


  createGrid();