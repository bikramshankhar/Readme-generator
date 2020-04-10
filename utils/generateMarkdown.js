
var fs = require("fs")
const genResponse = {

  generateMarkdown(res, data) {
   const returnRequest = `
# ${data.title}

## Description 
  ${data.description}

## Table of Contents
   
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
    
## Installation
  ${data.installation }

## Usage
  ${data.usage }

## Contributing
  ${data.contributors}

## Tests
${data.tests}

## License 
${ data.license }`;
  

fs.writeFile("README.md",returnRequest,function(err) {
  if (err) {
    return console.log(err)
  }
console.log ("Success!")
}) 

  }
}
module.exports = genResponse;

