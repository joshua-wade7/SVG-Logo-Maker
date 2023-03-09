const fs = require("fs");

const inquirer = require("inquirer");

const Svg = require("./lib/svg");

const shapes = require("./lib/shapes");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter no more than 3 characters",
      },
      {
        type: "input",
        name: "textColor",
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
        name: "color",
        message:
          "Please enter a color keyword (OR a hexadecimal number) for your shape color",
      },
    ])
    .then((data) => {
      const currentShape = new shapes[data.shape](
        data.color
        // data.text,
        // data.textColor
      );
      const generateSVG = new Svg();
      generateSVG.setText(data.text, data.textColor).setShape(currentShape);
      fs.writeFileSync("logo.svg", generateSVG.render());
      console.log("Generated logo.svg");
    });
};
//need to capture the user input in a .then
//console.log the data
//store the data inside of an object that we can pull from in our generateSVG const on the svg.js
//fs.writeFile (most likely to an index.html file)
//

promptUser(); // place this inside of a function that will fire off upon app load i.e. an init functon
