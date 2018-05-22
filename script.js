document.addEventListener("DOMContentLoaded", createDivs(16));
document.querySelector('#clearGrid').addEventListener("click", clearGrid);

function calculateBoxSize(size) {
    console.log(Math.round(700/size)-2);
    return Math.round(700/size)-2;
}

function createDivs(gridSize) {
    document.getElementById("gridSizeSlider").value = gridSize;

    var container = document.getElementById("grid");
    var i = 0;
    var j = 0;
    var number = 0;
    
    for(i=0; i < gridSize; i++) {
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
            if (getColorStyle()=="grey"){
                e.target.className = "col coloured";
            }

            else if (getColorStyle()=="rgb"){
                e.target.className = "col coloured-rgb";
                e.target.style.backgroundColor = randomColor();
            }    
        });
    });
}

function clearGrid(){
    document.querySelectorAll('.coloured').forEach(e => {
        e.className = 'col';
    });

    document.querySelectorAll('.coloured-rgb').forEach(e => {
        console.log("hello");
        e.className = 'col';
        e.style.backgroundColor = null;
    });
}

function getColorStyle(){
    var radios = document.getElementsByName("colorType");
    var size = radios.length;
    for (var i=0; i<size; i++){
        if (radios[i].checked){
            return radios[i].value;

            break;
        }
    }
}

function randomColor(){
    var r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

document.querySelector("#gridSizeSlider").addEventListener("input", function() {
    var newGridSize = this.value;
    document.getElementById("grid").innerHTML = "";
    createDivs(newGridSize);
});

