window.onload = function () {
    document.getElementById("colourSelect").addEventListener("change", changeColour);
    document.getElementById("addElementButton").addEventListener("click", addElement);
    document.getElementById("removeElementButton").addEventListener("click", removeElement);
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
    console.log('111')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("style").includes("flex:1")) {
            elements[i].setAttribute("style", `flex:1; color:${colour}`);
        } else {
            elements[i].setAttribute("style", `color:${colour}`);
        }
    }


}

function addElement() {
    let newElement = document.createElement("p");
    // newElement.textContent = "Newly added element";

    let sideTwo = document.getElementById("sideTwo");
    newElement.textContent = `Newly added element ${sideTwo.children.length}`;
    sideTwo.appendChild(newElement);
}

function removeElement(){
    let sideTwo = document.getElementById("sideTwo");
    // sideTwo.removeChild(sideTwo.lastElementChild);

    if (sideTwo.lastElementChild.tagName.toLowerCase() === "p") {
        sideTwo.removeChild(sideTwo.lastElementChild);
    }
}