const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];

//Ask the initial employee questions
inquirer.prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email"
        },
        {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ['Manager','Engineer', 'Intern'],
        }
        //need to go to function "moreInfo" to get additional data from here

    ])
    // .then(function(response) {
    //     console.log(response)
    // });

    // .then (function moreInfo (role){ 
    //     if (answers.role === "Manager") {
    //         inquirer.prompt([
    //             {
    //                 type:"input", 
    //                 message: "What is your Office Number?",
    //                 name: "officeNum",
    //             },
    //         ])
    //         .then(answer =>{
    //             const manager = new Manager (name, id, email, officeNum)
    //             console.log(manager);
    //             teamMembers.push(Manager);
    //             rerun()
    //         })
    //     }
    //         else if (answers.role === "Engineer") {
    //             inquirer.prompt([
    //                 {
    //                     type:"input", 
    //                     message: "What is your GitHub User Id?",
    //                     name: "githubUser",
    //                 },
    //             ])
    //             .then(answer => {
    //                 const engineer = new Engineer (name, id, email, githubUser)
    //                 console.log(engineer);
    //                 teamMembers.push(Engineer);
    //                 rerun()
    //             })
    //     }
    //         else if (answers.role === "Intern") {
    //         inquirer.prompt([
    //             {
    //                 type:"input", 
    //                 message: "What is your School Name?",
    //                 name: "school",
    //             },
    //         ])
    //         .then((answer) => {
    //             const intern = new Intern (name, id, email, school)
    //             console.log(intern);
        
    //             teamMembers.push(intern);
    //             rerun()
    //         })
    //     };


//Ask to ask for another employee
function rerun ()   {
        inquirer.prompt ([ 
            {
                type: "list", 
                message: "Add another team member?",
                name: "newTeamMember",
                choices: ['Yes, add another.','No, thank you.'],
            }
        ])
    
        .then(function (answer){
            if (answer.newTeamMember === "Yes") {
                addTeamMember()
            
            } 
            else {
            var createHTML = render(teamMembers)
            fs.appendFile(outputPath, createHTML, function(err){
                
                if(err) {
                    return console.log(err);
                }
                console.log("Success");
            });
            }
        })
    } 
    //const celeste = new Employee ("Celeste", 22, "newEmail")         
   // console.log (celeste)
