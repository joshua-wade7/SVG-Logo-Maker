//Require in svg.js

const Svg = require("./svg");

//write out my test for appending the text element
describe("Svg", () => {
  describe("setText should not append text element", () => {
    it("should fail to append the characters the user inputs", () => {
      const input = "";
      const result = new Svg().setText(input);
      expect(result).toEqual(false);
    });
  });
});

describe("text message and color working properly", () => {
  it("should set the text message and color for the svg element", () => {});
});
//write out my test for if the text exceeds 3 characters
//write out my test for text message and color being set properly
