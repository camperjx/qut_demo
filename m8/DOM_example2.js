window.onload = function () {
    document.getElementById("colourSelect").addEventListener("change", changeColour);
    document.getElementById("addElementButton").addEventListener("click", addElement);
    document.getElementById("removeElementButton").addEventListener("click", removeElement);

    document.getElementById("openWindowButton").addEventListener("click", openWindow);
    document.getElementById("moveWindowButton").addEventListener("click", moveWindow);
    document.getElementById("closeWindowButton").addEventListener("click", closeWindow);
}

function changeColour(event) {
    let colour = event.target.value;
    let sideOne = document.getElementById("sideOne");
    let paragraphs = sideOne.getElementsByTagName("p");
    //1.
    // sideOne.setAttribute("style", `flex:1; color:${colour}`);
    //2.
    // paragraphs.forEach((item)=>{
    //     item.setAttribute("style", `color: ${colour}`)
    // })
    //3.
    let elements = document.getElementsByClassName("sideOne");
    // console.log('111')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("style").includes("flex:1")) {
            elements[i].setAttribute("style", `flex:1; color:${colour}`);
        } else {
            elements[i].setAttribute("style", `color:${colour}`);
        }
    }
    alert(`Colour changed to ${colour} for side one!`);

}

function addElement() {
    let newElement = document.createElement("p");
    // newElement.textContent = "Newly added element";

    let sideTwo = document.getElementById("sideTwo");

    let text = prompt("Enter text for the new element:")
    newElement.textContent = text === null ? `Newly added element ${sideTwo.children.length}` : text;

    // newElement.textContent = `Newly added element ${sideTwo.children.length}`;
    sideTwo.appendChild(newElement);
}

function removeElement(){
    let sideTwo = document.getElementById("sideTwo");
    // sideTwo.removeChild(sideTwo.lastElementChild);

    if (sideTwo.lastElementChild.tagName.toLowerCase() === "p") {
        if (confirm("Are you sure you want to remove an element?")) {
            sideTwo.removeChild(sideTwo.lastElementChild);
        }
    }
}

let newWindow = null;
const width = 640;
const height = 480;
function openWindow() {
    if (newWindow === null) {
        newWindow = window.open("https://www.lipsum.com/", null, `width=${width}, height=${height}`);
    }
}

function openWindow() {
    if (newWindow === null || newWindow.closed) {
        newWindow = window.open("about:blank", "", `width=${width}, height=${height}`);
    }
}

function moveWindow() {
    if (newWindow !== null && !newWindow.closed) {
        const buffer = 100;


        // Get the height and width in case the window has changed size.
        const currentWidth = newWindow.outerWidth;
        const currentHeight = newWindow.outerHeight;


        // Get the height and width of the screen.
        const screenWidth = screen.width;
        const screenHeight = screen.height;


        // Generate a random number within the bounds we want
        const randWidth = buffer+Math.random()*(screenWidth-currentWidth-buffer*2);
        const randHeight = buffer+Math.random()*(screenHeight-currentHeight-buffer*2);


        // Use abs to make sure it's an integer.
        newWindow.moveTo(Math.abs(randWidth), Math.abs(randHeight));
        newWindow.focus();
    }
}

function closeWindow() {
    if (newWindow !== null && !newWindow.closed) {
        newWindow.close();
        newWindow = null;
    }
}