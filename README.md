# team-profile-generator

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

<img src="https://img.shields.io/badge/Javascript-yellow" />
<img src="https://img.shields.io/badge/jQuery-blue"  />
<img src="https://img.shields.io/badge/-node.js-green" />
<img src="https://img.shields.io/badge/-inquirer-orange" >
<img src="https://img.shields.io/badge/-fs-orange" >
<img src="https://img.shields.io/badge/-bootstrap-brown" >


## Description
--------------
team-profile-generator is a command-line application application that allows a manager user to input information about themselves and their team members to dynamicallly generate a team member HTML page.
This app runs on terminal and is powered by node.js, jQuery, and Javascript. The generated html file will be under dist folder with the title 'employees.html'.

The following GIF displays the app's functionality:

![team-profile-generator](./images/team-profile-generator.gif)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation
---
```bash
npm i
```

## License
---
This application is licensed under:

- [MIT License](https://choosealicense.com/licenses/mit/)


## Usage
---
Run the following command at th root of your project and answer the prompted questions:

```bash
node index
```

## Contributing
---
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Test
---
No test available


## Questions
---
If you have any questions, please feel free to check out my github account and email me at the email address below:

Github account: [sistaniabong](https://github.com/sistaniabong)

Email address: sistaniawibonele@gmail.com