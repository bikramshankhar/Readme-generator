const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const apiCall = require("./utils/api")


function init () {

    inquirer.prompt([
        {
            type: "input",
            message: "Enter your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "Project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Project description?",
            name: "description"
        },
        {
            type: "input",
            message: "What is in the Table of contents?",
            name: "contents"
        },
        {
            type: "input",
            message: "Installation of the project?",
            name: "installation"
        },
        {
            type: "input",
            message: "Usage of this project?",
            name: "usage"
        },
        {
            type: "input",
            message: "Contributors to this project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Tests for this project?",
            name: "tests"
        },
        {
            type: "input",
            message: "License of this project?",
            name: "license"
        },
    ])
        .then (function(response) {
            let userName = response.name 
            apiCall.getUser(userName,response)
        })
}

init();