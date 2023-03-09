class Svg {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  render() {
    return `<svg height="300" width="200">${this.shape}${this.text}</svg> `;
  }

  setText(text, textColor) {
    this.text = `<text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    return this;
  }

  setShape(shape) {
    this.shape = shape.render();
    return this;
  }
}

//Need to generate my SVG file using this function
//Does my switch statement need to be in this js or another one???
module.exports = Svg;
