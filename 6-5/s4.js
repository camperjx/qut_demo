window.onload = function (){
    // getActivityIdea()
    getActivityIdea2()
}

const getActivityIdea = function () {
    fetch("https://www.boredapi.com/api/activity")
        .then(function (response) { return response.json() })
.then(function (data) {
        document.getElementById("ideaDiv").textContent = data.activity
    });
}

async function getActivityIdea2(){
    let response = await fetch("https://www.boredapi.com/api/activity")
    let data = await response.json()
    document.getElementById("ideaDiv").textContent = data.activity


}