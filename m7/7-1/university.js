window.onload = async function() {
    const country = "Australia";
    const name = "Queensland";
    let universityListElement = document.getElementById("universityList");
    let response = await fetch(`http://universities.hipolabs.com/search?country=${country}&name=${name}`)
    if (!response.ok) {
        universityListElement.innerHTML = "<p>Encountered a problem when retrieving university data.</p>";
    } else {
        let type = response.headers.get("content-type");
        if (type === "application/json") {
            let json = await response.json();
            universityListElement.innerHTML = "";
            json.forEach(element => {
                universityListElement.innerHTML += `<p>${element.name}</p>`;
            });
        } else {
            universityListElement.innerHTML = "<p>Did not receive JSON from the API.</p>";
        }
    }
}