function Employee(id, firstname, lastname, gender, age, position){
    this.id = id
    this.firstname = firstname
    this.lastname= lastname
    this.gender = gender
    this.age = age
    this.position = position
}

function Sale(id, item, price, date){
    this.id = id
    this.item = item
    this.price = price
    this.date = date
}

const employees = [
    new Employee(1,"John","Smith","Male",23,"Manager"),
    new Employee(2,"Mark","Tent","Male",25,"Manager")
] // Replace ellipsis with other employees.
const sales = [
    new Sale(1, "Wi-Fi Adapter", 40.00, "01-09-2022"),
    new Sale(2, "Samsung Phone s23", 940.00, "01-09-2022"),

] // Replace ellipsis with other sales.

function showEmployeeDetails (employee) {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`);
}
function showSaleDetails (sale) {
    console.log(`Date of sale: ${sale.date}\nItem sold: ${sale.item}\nItem price: ${sale.price}\n Staff ID of seller: ${sale.staffId}`);
}

function viewAllEmployees(employees) {
    for (let i = 0; i < employees.length; i++) {
        showEmployeeDetails(employees[i]);
    }
}
function viewAllSales(sales) {
    for (let i = 0; i < sales.length; i++) {
        showSaleDetails(sales[i]);
    }
}

function findEmployeeById(id, employees){
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            return employees[i];
        }
    }
    console.log(`No employee with ID ${id} found!`);
}

function findSaleById(id, sales){
    for (let i = 0; i < sales.length; i++) {
        if (sales[i].id === id) {
            return sales[i];
        }
    }
    console.log(`No employee with ID ${id} found!`);
}

function findEmployeesWithPosition(position, employees) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].position === position) {
            console.log(`Employee with staff ID ${employees[i].id} is a ${position}`)
        }
    }
}

console.log(viewAllEmployees(employees))
console.log(findEmployeeById(2,employees))
console.log(findEmployeesWithPosition("Manager", employees))