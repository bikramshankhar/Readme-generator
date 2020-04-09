const axios = require("axios");
const generateMarkdown = require("./generateMarkdown")
const api = {
  getUser(username,response) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(res)  {

      generateMarkdown.generateMarkdown(res,response)
    }).catch(function(error) {
      if (error) {
        console.log (error)
      } 
      else {
        console.log ("Success!")
      }
    })
  }
  
};

module.exports = api;