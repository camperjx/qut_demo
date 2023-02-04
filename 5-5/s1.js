function Employee(id, firstname, lastname, gender, age, position){
    this.id = id
    this.firstName = firstname
    this.lastName= lastname
    this.gender = gender
    this.age = age
    this.position = position
}

function Sale(id, item, price, date, staffid){
    this.id = id
    this.item = item
    this.price = price
    this.date = date
    this.staffid= staffid
}

const employees = [
    new Employee(1,"John","Smith","Male",23,"Manager"),
    new Employee(2,"Mark","Tent","Male",25,"Manager")
] // Replace ellipsis with other employees.
const sales = [
    new Sale(1, "Wi-Fi Adapter", 40.00, "01-09-2022", 1),
    new Sale(2, "Samsung Phone s23", 940.00, "01-09-2022", 2),

] // Replace ellipsis with other sales.

function showEmployeeDetails (employee) {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`);
}
function showSaleDetails (sale) {
    console.log(`Date of sale: ${sale.date}\nItem sold: ${sale.item}\nItem price: ${sale.price}\n Staff ID of seller: ${sale.staffId}`);
}

function viewAllEmployees(employees) {
   employees.forEach(function(element){
       showEmployeeDetails(element)
   })
}
function viewAllSales(sales) {
    sales.forEach(function (element) {
        showSaleDetails(element);
    });
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

function mapSalesToEmployees(){
    employees.map((emp)=>{
        newemp = Object.assign({}, emp)
        newemp.sales = sales.filter((sale)=>{
            return emp.id === sale.staffid
        })
        return newemp
    })

}
function checkEmployeeCommission(){
    employees.forEach((emp)=>{
        try{
            if(emp.sales.length < 1){
                throw new Error('Employee has no sales!')
            } else {
                let total = 0
                emp.sales.forEach((sale)=>{
                    total += sale.price
                })

                let commission = total* 0.1
                console.log(`Employee gets a commission of ${commission} dollars.`)
            }

        }catch(err){
            console.log(`Failed to calculate commission for employee ${employee.id}: ${error.message} `)
        }
    })


}

//Input should be x > 0, y >= 0.
function greatestCommonDivisor(x, y) {
    if (y === 0) {
        return x;
    } else {
        return greatestCommonDivisor(y, x % y);
    }
}
//
// console.log(viewAllEmployees(employees))
// console.log(findEmployeeById(2,employees))
// console.log(findEmployeesWithPosition("Manager", employees))
module.exports = {
    Employee: Employee,
    Sale: Sale,
    employees1: employees,
    showEmployeeDetails: showEmployeeDetails,
    showSaleDetails: showSaleDetails,
    viewAllEmployees: viewAllEmployees,
    mapSalesToEmployees: mapSalesToEmployees,
    checkEmployeeCommission: checkEmployeeCommission
}