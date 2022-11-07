const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");

    containerEl.appendChild(colorContainerEl);
    
}

const colorContainerEls = document.querySelectorAll(".color-container")
// this is to get the class of all the color container

generateColors();

function generateColors() {
    // for each helps execute a function once for each container
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode
        
    })
    
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLenght = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNumner = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumner, randomNumner + 1);
        // the substring helps us get numner form our chars with the use of the randomNumner
        // then it saves the value and add it to the next line of code till our loop runs six times complete
        
    }

    return colorCode;
    
}
