const s1 = require('./s1')




// test function
// Test creating an employee.

test("Create Mary Sue as an employee.", () => {
    let testobj = new s1.Employee(1, "Mary", "Sue", "Female", 32, "Salesperson")
    expect(testobj).toEqual({id:1, firstName:"Mary", lastName:"Sue", gender:"Female", age:32, position:"Salesperson"})
})

// Test creating an employee with no parameters.
test("Create an empty employee.", () => {
    let testobj = new s1.Employee();
    expect(testobj).toEqual({id:undefined, firstName:undefined, lastName:undefined, gender:undefined, age:undefined, position:undefined});
});

test("showDetail", ()=>{
    s1.viewAllEmployees(s1.employees1)
})