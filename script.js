const container = document.getElementById("container");

const row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

const square = document.createElement("div");

for (let i = 0; i < 25; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < 25; i++) { 
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);

        square.addEventListener("mouseenter",() => {
            square.style.backgroundColor = "black";
        });
    }
    container.appendChild(row);


}

    



