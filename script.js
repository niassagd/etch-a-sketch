const container = document.getElementById("container");
const div = document.createElement("div");


for (let i = 0; i < 16*16; i++) { 
    const div = document.createElement("div");
    div.classList.add("piece");
    container.appendChild(div);
}

