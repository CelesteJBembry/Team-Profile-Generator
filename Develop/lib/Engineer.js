// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(githubUser, name, id, email) {
        super(name, id, email)
        this.githubUser = githubUser   
}
getGithub(){
    return this.githubUser
};

getRole() {
    return 'Engineer'
}};
