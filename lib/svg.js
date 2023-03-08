class Svg {
  constructor(text, shape) {
    this.text = "";
    this.shape = "";
  }
  render() {
    return `<svg height=300 width=200`;
  }

  setText() {}

  setShape() {}
}

//what was I doing here.
const generateSVG = {};
//Does my switch statement need to be in this js or another one???
module.exports = Svg;
