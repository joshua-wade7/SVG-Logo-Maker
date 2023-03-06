const fs = require("fs");

const inquirer = require("inquirer");

const svg = require("./lib/svg");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter no more than 3 characters",
    },
    {
      type: "input",
      name: "color",
      message:
        "Please enter a color keyword (OR a hexadecimal number) for your text color",
    },
    {
      type: "list",
      name: "shape",
      message: "Please select a shape for your image",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shape-color",
      message:
        "Please enter a color keyword (OR a hexadecimal number) for your shape color",
    },
  ]);
};
//need to capture the user input in a .then
//console.log the data
//store the data inside of an object that we can pull from in our generateSVG const on the svg.js
//fs.writeFile (most likely to an index.html file)
//

promptUser(); // place this inside of a function that will fire of upon app load i.e. an init functon
