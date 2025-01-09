const container = document.getElementById("container");


let n = 16;

//function to create grid
function drawGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < n; i++) { 
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);

            square.addEventListener("mouseenter",() => {
                square.style.backgroundColor = "black";
            });
        }
        container.appendChild(row);
    }
}

drawGrid(n);

//function to delete grid

let m = container.children.length;

function deleteGrid() {
    let m = container.children.length;
    for(let i = 0; i < m; i++) {
        const oldRow = container.firstElementChild;
        container.removeChild(oldRow);
    }
}


//button for prompt to ask to change rows/columns to
const btn = document.querySelector("button");
function promptFunction() {
    let n = prompt("Enter number between 1 and 100):", "25");
        if (n > 100) {
            deleteGrid();
            drawGrid(100);
            alert("A max grid of 100 x 100 has been created");
        } else {
            deleteGrid();
            drawGrid(n);
        }
    
}
btn.addEventListener("click", promptFunction);





    



