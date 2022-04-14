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
    //splice one index of employees at the 'index' data that was added in display employees
    employees.splice($(this).data('index'),1);
    displayEmployees(employees);
}

function displayEmployees(arrayToDisplay) {
    //get table element
    let el = $('#outputTable');
    let totalYearly = 0;
    //empty element
    el.empty();
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
        totalYearly += Number(arrayToDisplay[i].celery);
    }
    //target total monthly
    el = $('#totalCeleryOut');
    //empty
    el.empty();
    //add total cost divided by 12
    el.append((totalYearly/12).toFixed(2));
    //change background color depending on Monthly Celery
    el = $('#totalCeleryOutAll');
    console.log(el.css("background-color"));
    if(totalYearly/12 > 20000 && el.css('background-color') == 'rgb(168, 226, 160)') {
        el.css('animation-name', 'fadeToRed').css('animation-duration', '1s');
        el.css('background-color', '#F03A47');
    }
    if(totalYearly/12 <= 20000 && el.css('background-color') != 'rgb(168, 226, 160)') {
        el.css('animation-name', 'fadeToGreen').css('animation-duration', '1s');
        el.css('background-color', '#A8E2A0'); 
    }
}

function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#celeryIn').val('');
}
