const setTextRegular = function(){
    document.getElementById("text").style.fontStyle = 'normal'
    document.getElementById("text").style.fontWeight = 'normal'
}

const setTextItalic = function(){
    document.getElementById("text").style.fontStyle = 'italic'
}

const setTextBold = function(){
    document.getElementById("text").style.fontWeight = 'bold'
}

window.onload = function () {
    document.getElementById("regularButton").addEventListener("click", setTextRegular);
    document.getElementById("italicButton").addEventListener("click", setTextItalic);
    document.getElementById("boldButton").addEventListener("click", setTextBold);
}