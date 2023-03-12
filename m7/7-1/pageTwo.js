window.onload = function () {
    sessionStorage.setItem("firstKey", "Hello world!");
    const firstKey = sessionStorage.getItem("firstKey");
    document.getElementById("firstKeyValue").innerHTML = firstKey === null ? "Nothing" : firstKey;
}