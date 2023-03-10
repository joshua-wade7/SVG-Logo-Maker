//Require in the shapes.js

const { Circle, Square, Triangle } = require("./shapes");

describe("Shape", () => {
  describe("Circle", () => {
    it("Should return a circle with the color of blue", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        `<circle cx="120" cy="100" r="80" fill="blue"/>`
      );
    });
  });
});

describe("Square", () => {
  it("Should return a square with the color of red", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      `<rect width="100" height="100" fill="red"/>`
    );
  });
});

describe("Triangle", () => {
  it("Should return a triangle with the color of green", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="green"/>`
    );
  });
});
//Write out my 'test' for the shape rendering 300 x 200 svg element
//Write out my 'test' for a shape being included.
