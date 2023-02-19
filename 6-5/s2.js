const setBackgroundColor = function(event){
    // alert(event.target.value)
    document.body.style.backgroundColor = event.target.value
}

const disableListener = function(){
    document.getElementById("enableButton").disabled = false;
    document.getElementById("disableButton").disabled = true;
    document.getElementById("backgroundColor").removeEventListener("change", setBackgroundColor)

}

const enbleListener = function(){
    document.getElementById("enableButton").disabled = true;
    document.getElementById("disableButton").disabled = false;
    document.getElementById("backgroundColor").addEventListener("change", setBackgroundColor)
    
}


window.onload = function () {
    document.getElementById("backgroundColor").addEventListener("change", setBackgroundColor);
    document.getElementById("enableButton").disabled = true;
    document.getElementById("disableButton").disabled = false;
    document.getElementById("disableButton").addEventListener("click", disableListener)
    document.getElementById("enableButton").addEventListener("click", enbleListener)
}