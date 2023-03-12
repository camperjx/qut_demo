window.onload = function () {
    const firstKey = sessionStorage.getItem("firstKey");
    const secondKey = sessionStorage.getItem("secondKey");
    const thirdKey = localStorage.getItem("thirdKey");
    document.getElementById("firstKeyValue").innerHTML = firstKey === null ? "Nothing" : firstKey;
    document.getElementById("secondKeyValue").innerHTML = secondKey === null ? "Nothing" : secondKey;
    document.getElementById("thirdKeyValue").innerHTML = thirdKey === null ? "Nothing" : thirdKey;
}