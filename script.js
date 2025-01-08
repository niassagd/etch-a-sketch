const container = document.getElementById("container");

const div = document.createElement("div");
container.appendChild(div);

const square = document.createElement("div");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    for (let i = 0; i < 16; i++) { 
        const square = document.createElement("div");
        square.classList.add("square");
        div.appendChild(square);
    }
    container.appendChild(div);
}
