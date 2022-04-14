$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $('#submitButton').on('click', addEmployee);
    $('#outputs').on('click', '.deleteButton', deleteEmployee)
}

let employees = [];

function addEmployee() {
    console.log('in addEmployee');
    //get input values and store them in object
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#idIn').val(),
        celery: $('#celeryIn').val()
    }
    //push new object to employees array
    employees.push(newEmployee);
    console.log(employees);
    displayEmployees(employees);
    clearInputs();
}

function deleteEmployee() {
    console.log('in delete employee');
    employees.splice($(this).data('index'),1);
    displayEmployees(employees);
}

function displayEmployees(arrayToDisplay) {
    //get table element
    let el = $('#outputTable');
    let totalMonthly = 0;
    //empty element
    el.empty();
    //add table headers
    el.append(
        `<tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Annual Celery</th>
            <th></th>
        </tr>`
    );

    //loop through employees
    for(let i = 0; i < arrayToDisplay.length; i++) {
        //append table with each
        el.append(`
        <tr>
            <td>${arrayToDisplay[i].firstName}</td>
            <td>${arrayToDisplay[i].lastName}</td>
            <td>${arrayToDisplay[i].id}</td>
            <td>${arrayToDisplay[i].title}</td>
            <td>${arrayToDisplay[i].celery}</td>
            <td><button class="deleteButton" data-index="${i}">Delete</button></td>
        </tr>
        `);
        totalMonthly += Number(arrayToDisplay[i].celery);
    }
    //target total monthly
    el = $('#totalCeleryOut');
    //empty
    el.empty();
    //add total cost
    el.append(totalMonthly.toFixed(2));
}

function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#celeryIn').val('');
}
