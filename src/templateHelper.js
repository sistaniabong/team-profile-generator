const fs = require('fs');
const Employee = require('../lib/Employee');

const htmlcontent = (div) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid" id="home">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <div class="row justify-content-md-center">
        ${div}
    </div>
    
</body>
</html>`;




function managerCard(manager){
    return `<div class="col-md-auto">
    <div class="card text-white bg-info" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <h6 class="card-title">${manager.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush" id="team-info">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number:  ${manager.office}</li>
    </ul>
</div>
</div>`
}




function engineerCard(engineer){
    return `<div class="col-md-auto">
    <div class="card text-white bg-info" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.getName()}</h5>
      <h6 class="card-title">${engineer.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush" id="team-info">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">Github:  <a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()} </a></li>
    </ul>
</div>
</div>`

}

function internCard(intern){
    return `<div class="col-md-auto">
    <div class="card text-white bg-info" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.getName()}</h5>
      <h6 class="card-title">${intern.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush" id="team-info">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div>`
}

function addToContent(div){
    return htmlcontent(div)
}

function generateContent(employees){
    console.log(employees);
    // console.log(employees[0]);
    // console.log(employees[0].getRole()) ; //return the role of the employee

    // const managerDiv = managerCard(employees[0]); //create manager card

    // const htmlPageContent = addToContent(managerDiv)
    // console.log(htmlPageContent)
    let joinedDiv = ""
    for (var i=0; i< employees.length;i++){
        console.log(employees[i])
        switch (employees[i].getRole()){
            case 'Manager':
                console.log('Manager')
                const managerDiv = managerCard(employees[i]);
                joinedDiv += managerDiv;
                // let htmlPageContent = addToContent(managerDiv);
                break;
            case 'Engineer':
                console.log('Engineer')
                const engineerDiv = engineerCard(employees[i]);
                joinedDiv += engineerDiv;

                // let htmlPageContent = addToContent(managerDiv);
                // console.log(htmlPageContent)
                break;
            case 'Intern':
                console.log('Intern')
                const internDiv = internCard(employees[i]);
                joinedDiv += internDiv;
                break;
        }
    }
    const htmlPageContent = addToContent(joinedDiv);
    
    // Write an HTML file
    fs.writeFile('./dist/employees.html',htmlPageContent,(err) => 
        err ? console.log(err) : console.log('Successfully created employees.html!'));
}

module.exports = generateContent;