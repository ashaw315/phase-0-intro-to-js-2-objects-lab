let employee = {
    sam: "11 broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee, [key])
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}