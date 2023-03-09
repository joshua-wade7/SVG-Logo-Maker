class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="120" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<rect width="100" height="100" fill="${this.color}"/> `;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
