function calculateBoxSize(size) {
    console.log(Math.round(600/size));
    return Math.round(600/size);
}

function createDivs(gridSize) {
    var container = document.getElementById("container");
    var i = 0;
    var j = 0;
    var number = 0;
    
    for(i=0; i <gridSize; i++) {
        var nodeRow = document.createElement("div");
        nodeRow.setAttribute("class", "row");
        container.appendChild(nodeRow);

        for (j=0; j < gridSize; j++) {
            var nodeData = document.createElement("div");
            nodeData.setAttribute("class", "col");
            nodeRow.appendChild(nodeData);
            number += 1;
        }
    }

    document.querySelectorAll('.col').forEach(setBorders => {
        setBorders.setAttribute('style', `height: ${calculateBoxSize(gridSize)}px; width: ${calculateBoxSize(gridSize)}px;`);
        setBorders.addEventListener("mouseenter", (e) => {
            e.target.className = "col coloured";
        });
    });
}

function clearGrid(){
    document.querySelectorAll('.coloured').forEach(e => {
        e.className = 'col';
    });
}

var gridSize = prompt("Enter grid size: ");

createDivs(gridSize);
document.querySelector('#clearGrid').addEventListener("click", clearGrid);