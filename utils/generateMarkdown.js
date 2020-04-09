
var fs = require("fs")
const genResponse = {

  generateMarkdown(res, response) {
   const userInfo =
`# ${response.title}

## Description 
  ${response.description}

## Table of Contents
   
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
    
## Installation
  ${response.installation }

## Usage
  ${response.usage }

## Contributing
  ${response.contributors}

## Tests
${response.tests}

## License 
${ response.license }`;
  

fs.writeFile("README.md",userInfo,function(err) {
  if (err) {
    return console.log(err)
  }
console.log ("Success!")
}) 

  }
}
module.exports = genResponse;
