class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color);
  }

  renderShape() {
    return `<circle cx="25" cy="75" r="20" fill=${this.color}/>`;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color);
  }

  renderShape() {
    return `<rect width="200" height="200" fill=${this.color}/> `;
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color);
  }

  renderShape() {
    return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill=${this.color}/>`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
