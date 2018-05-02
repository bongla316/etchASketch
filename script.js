function calculateBoxSize(size) {
    console.log(Math.round(600/size));
    return Math.round(600/size);
}




function createDivs() {
    var container = document.getElementById("container");
    var i = 0;
    var j = 0;
    var number = 0;
    
    for(i=0; i <16; i++) {
        var nodeRow = document.createElement("div");
        nodeRow.setAttribute("class", "row");
        container.appendChild(nodeRow);

        for (j=0; j < 16; j++) {
            var nodeData = document.createElement("div");
            nodeData.setAttribute("class", "col");
            //var nodeText = document.createTextNode("   " + number + "   ");
            //nodeData.appendChild(nodeText);
            nodeRow.appendChild(nodeData);
            number += 1;
        }
    }

    document.querySelectorAll('.col').forEach(setBorders => {
        setBorders.setAttribute('style', `height: ${calculateBoxSize(16)}px; width: ${calculateBoxSize(16)}px;`);
        setBorders.addEventListener("mouseenter", (e) => {
            e.target.className = "col coloured";
        })
    });
}

createDivs();