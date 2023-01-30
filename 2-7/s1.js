const employee1 = JSON.parse('{"id":1, "firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"}'); 
const sale1 = ('{"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}'); 

function showEmployeeDetails (employee) {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`);
}
function showSaleDetails (sale) {
    console.log(`Date of sale: ${sale.date}\nItem sold: ${sale.item}\nItem price: ${sale.price}\n Staff ID of seller: ${sale.staffId}`);
}

function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}
 

function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
}

const sal1 = {
    staffId:1,
    item:"Wi-Fi Adapter",
    price:40.00,
    date:"03-09-2022"
}

const sal2 = {
    staffId:1,
    item:"Glass Cleaner",
    price:14.00,
    date:"03-09-2022"
}

const emp1 = {
    id:1,
    firstName:"Tom",
    lastName:"Gill",
    gender:"Female",
    age:32,
    position:"Salesperson"
}

const emp2 = {
    id:1,
    firstName:"Mary",
    lastName:"Sue",
    gender:"Female",
    age:32,
    position:"Salesperson"
}

const employees = [emp1, emp2, employee1]
const sales= [sal1, sal2, JSON.parse(sale1)]

function showAll(){
	showEmployeeDetails(employees[0])
	showSaleDetails(sales[0])
}
showAll()