// Data for employee and sales. Since you've been able to put it in your 
// scripts by now, we'll include it here for you.
let employees = [{
    "id":1,
    "firstName":"John",
    "lastName":"Smith",
    "gender":"Male",
    "age":23,
    "position":"Manager"
},
{
    "id":2,
    "firstName":"Mary",
    "lastName":"Sue",
    "gender":"Female",
    "age":32,
    "position":"Salesperson"
},
{
    "id":3,
    "firstName":"Fred",
    "lastName":"Jones",
    "gender":"Non-Binary",
    "age":54,
    "position":"Salesperson"
},
{
    "id":4,
    "firstName":"Jane",
    "lastName":"Doe",
    "gender":"Female",
    "age":41,
    "position":"Accountant"
},
{
    "id":5,
    "firstName":"Joe",
    "lastName":"Bloggs",
    "gender":"Male",
    "age":65,
    "position":"IT Administrator"
}];

const sales = [{
    "staffId":1,
    "item":"Wi-Fi Adapter",
    "price":40.00,
    "date":"01-09-2022",
    url:"https://www.wikipedia.org/"
},
{
    "staffId":1,
    "item":"Wi-Fi Adapter",
    "price":40.00,
    "date":"03-09-2022",
    url:"https://www.wikipedia.org/"
},
{
    "staffId":1,
    "item":"USB Cable",
    "price":5.00,
    "date":"03-09-2022",
    url:"https://www.wikipedia.org/"
},
{
    "staffId":1,
    "item":"Thermal Paste",
    "price":7.50,
    "date":"05-09-2022",
    url:"https://www.wikipedia.org/"
},
{
    "staffId":1,
    "item":"Wi-Fi Adapater",
    "price":40.00,
    "date":"07-09-2022",
    url:"https://www.wikipedia.org/"
},
{
    "staffId":2,
    "item":"USB Stick",
    "price":10.99,
    "date":"06-09-2022",
    url:"https://www.google.com/"
},
{
    "staffId":3,
    "item":"Pre-built PC",
    "price":1999.95,
    "date":"02-09-2022",
    url:"https://www.google.com/"
},
{
    "staffId":3,
    "item":"USB Cable",
    "price":5.00,
    "date":"02-09-2022",
    url:"https://www.google.com/"
},
{
    "staffId":3,
    "item":"HDMI Cable",
    "price":15.45,
    "date":"02-09-2022",
    url:"https://www.google.com/"
}]; 

// onload function for the window.
window.onload = function () {
    // Event listener for form's submit event.
    document.getElementById("employeeForm").addEventListener("submit", checkFormData);
    loadData()
    loadSelectData()
    // Add any other event listeners you need here.
    document.getElementById('staffIdSelect').addEventListener('change', loadDataById)

};

async function  loadData(){
    let employeesBody = document.getElementById("employeesBody")
    let salesBody = document.getElementById("salesBody")
    let trElement = document.createElement('tr')
    let tdElement = document.createElement('td')

    let contentF = await function(item){
        let trcontentEl = document.createElement('tr')
        let tdidEl = document.createElement('td')
        let tdfirstNameEl =document.createElement('td')
        let tdlastName = document.createElement("td")
        let tdgender = document.createElement("td")
        let tdage = document.createElement("td")
        let tdposition = document.createElement("td")

        tdidEl.appendChild(document.createTextNode(item.id))
        tdfirstNameEl.appendChild(document.createTextNode(item.firstName))
        tdlastName.appendChild(document.createTextNode(item.lastName))
        tdgender.appendChild(document.createTextNode(item.gender))
        tdage.appendChild(document.createTextNode(item.age))
        tdposition.appendChild(document.createTextNode(item.position))

        trcontentEl.appendChild(tdidEl)
        trcontentEl.appendChild(tdfirstNameEl)
        trcontentEl.appendChild(tdlastName)
        trcontentEl.appendChild(tdgender)
        trcontentEl.appendChild(tdage)
        trcontentEl.appendChild(tdposition)

        employeesBody.appendChild(trcontentEl)
    }
    await employees.forEach(contentF)


    let saleContentF = await function(item){
        let trcontentEl = document.createElement('tr')
        let tdstaffidEl = document.createElement('td')
        let tditemEl =document.createElement('td')
        let tdpriceEl = document.createElement("td")
        let tdDateEl = document.createElement("td")
        let tdurlbutton = document.createElement("td")

        tdstaffidEl.appendChild(document.createTextNode(item.staffId))
        tditemEl.appendChild(document.createTextNode(item.item))
        tdpriceEl.appendChild(document.createTextNode(item.price))
        tdDateEl.appendChild(document.createTextNode(item.date))
        tdurlbutton.innerHTML = `<button id='${item.id}' value='${item.url}'  onclick='window.open("${item.url}", "mozillaWindow", "popup");'>View URL</button>`

        trcontentEl.appendChild(tdstaffidEl)
        trcontentEl.appendChild(tditemEl)
        trcontentEl.appendChild(tdpriceEl)
        trcontentEl.appendChild(tdDateEl)
        trcontentEl.appendChild(tdurlbutton)
        salesBody.appendChild(trcontentEl)
    }
    await sales.forEach(saleContentF)

}

function loadSelectData(){
    let selectStaffIdEl = document.getElementById('staffIdSelect')
    employees.forEach((item)=>{
        let optionEl = document.createElement('option')
        optionEl.appendChild(document.createTextNode(item.id))
        optionEl.setAttribute('value', item.id)
        selectStaffIdEl.appendChild(optionEl)
    })
}

function clearDataOnDatadiv(){
    let employeesBody = document.getElementById("employeesBody")
    let salesBody = document.getElementById("salesBody")
    let selectStaffIdEl = document.getElementById('staffIdSelect')
    while (employeesBody.lastElementChild) {
        employeesBody.removeChild(employeesBody.lastElementChild);
    }
    while (salesBody.lastElementChild) {
        salesBody.removeChild(salesBody.lastElementChild);
    }
    while (selectStaffIdEl.lastElementChild) {
        selectStaffIdEl.removeChild(selectStaffIdEl.lastElementChild);
    }
}

function loadDataById(event){
    //clear content on the table
    let employeesBody = document.getElementById("employeesBody")
    let salesBody = document.getElementById("salesBody")
    while (employeesBody.lastElementChild) {
        employeesBody.removeChild(employeesBody.lastElementChild);
    }
    while (salesBody.lastElementChild) {
        salesBody.removeChild(salesBody.lastElementChild);
    }
    let staffid = event.target.value
    if(staffid === 'all'){
        loadData()
    }else{
        let employeeById = employees.find(function(item){
            return item.id === parseInt(staffid)
        })

        let salesById = sales.filter(function (item){
            return item.staffId === parseInt(staffid)
        })



        let trcontentEl = document.createElement('tr')
        let tdidEl = document.createElement('td')
        let tdfirstNameEl =document.createElement('td')
        let tdlastName = document.createElement("td")
        let tdgender = document.createElement("td")
        let tdage = document.createElement("td")
        let tdposition = document.createElement("td")
        tdidEl.appendChild(document.createTextNode(employeeById.id))
        tdfirstNameEl.appendChild(document.createTextNode(employeeById.firstName))
        tdlastName.appendChild(document.createTextNode(employeeById.lastName))
        tdgender.appendChild(document.createTextNode(employeeById.gender))
        tdage.appendChild(document.createTextNode(employeeById.age))
        tdposition.appendChild(document.createTextNode(employeeById.position))

        trcontentEl.appendChild(tdidEl)
        trcontentEl.appendChild(tdfirstNameEl)
        trcontentEl.appendChild(tdlastName)
        trcontentEl.appendChild(tdgender)
        trcontentEl.appendChild(tdage)
        trcontentEl.appendChild(tdposition)
        employeesBody.appendChild(trcontentEl)


        //sales reload

        salesById.forEach(function(item){
            let strcontentEl = document.createElement('tr')
            let tdstaffidEl = document.createElement('td')
            let tditemEl =document.createElement('td')
            let tdpriceEl = document.createElement("td")
            let tdDateEl = document.createElement("td")
            tdstaffidEl.appendChild(document.createTextNode(item.staffId))
            tditemEl.appendChild(document.createTextNode(item.item))
            tdpriceEl.appendChild(document.createTextNode(item.price))
            tdDateEl.appendChild(document.createTextNode(item.date))
            strcontentEl.appendChild(tdstaffidEl)
            strcontentEl.appendChild(tditemEl)
            strcontentEl.appendChild(tdpriceEl)
            strcontentEl.appendChild(tdDateEl)
            salesBody.appendChild(strcontentEl)
        })



    }



}

/* This function is used to handle the submit event on the form.
   You should complete it so it checks the values of the form to see if they
   are correct.
   If a value is:
   - missing;
   - the incorrect type (e.g. not a number for age); or
   - a duplicate (for ID)
   Then you should show an alert to the user. Otherwise, that data should be
   added to the employees object array.
   You should also update the list of elements in the staff ID drop down, and
   update the display of employee data if it is set to all.
*/
function checkFormData (event) {
    // Stops the default action of the event - in this case, to submit data
    // and refresh the page.
    event.preventDefault();

    // Getting the data from the form.
    const form = document.getElementById("employeeForm");
    const id = form.elements["id"].value;
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const gender = form.elements["gender"].value;
    const age = form.elements["age"].value;
    const position = form.elements["position"].value;
    console.log("Got the following from the form...");
    console.log(`id: ${id}, firstName: ${firstName}, lastName: ${lastName}, gender: ${gender}, age: ${age}, position: ${position}.`);
    if (!id || !firstName || !lastName  || !gender || !age || !position){
        alert("Please fill all the fields of the new employee")
    }else{
        let flagDupId = employees.find((item)=>{
            alert('id:' + id + "- idA: " +item.id)
            return item.id === parseInt(id)
        })
        alert(flagDupId)
        if(isNaN(age)){
            alert('Please enter a numeric value for the field "age"')
        }else if(flagDupId){
            alert('The input id has been used, please enter a new id')
        }else{
            alert('h')
            let emploeeNew = {
                "id":parseInt(id),
                "firstName":firstName,
                "lastName":lastName,
                "gender":gender,
                "age":age,
                "position":position
            }

            employees.push(emploeeNew)
            clearDataOnDatadiv()
            loadData()
            loadSelectData()
        }

    }
    // Finish the function to check the inputted data, and either add it to the
    // employee array, or tell the user they've made a mistake in their input.
};
