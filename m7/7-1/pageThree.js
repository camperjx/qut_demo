window.onload = function () {
    sessionStorage.setItem("secondKey", "Goodbye world!");
    localStorage.setItem("thirdKey", "Welcome back world!");
    const secondKey = sessionStorage.getItem("secondKey");
    const thirdKey = localStorage.getItem("thirdKey");
    document.getElementById("secondKeyValue").innerHTML = secondKey === null ? "Nothing" : secondKey;
    document.getElementById("thirdKeyValue").innerHTML = thirdKey === null ? "Nothing" : thirdKey;
}