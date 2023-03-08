class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor() {}
}

class Circle extends Shape {
  constructor() {
    super(color);
  }

  renderShape() {
    return `<circle cx="25" cy="75" r="20"/>`;
  }
}

class Square extends Shape {
  constructor() {
    super(color);
  }

  renderShape() {
    return `<rect x="10" y="10" width="30" height="30"/> `;
  }
}

class Triangle extends Shape {
  constructor() {
    super(color);
  }

  renderShape() {
    return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
