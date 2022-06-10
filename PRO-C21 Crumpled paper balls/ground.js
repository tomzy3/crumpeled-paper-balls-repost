class ground {
  constructor(x, y, width, height) {
    this.x = x,
      this.y = y,
      this.width = width,
      this.height = height
  }

  display() {
    groundplane = Bodies.rectangle(this.x, this.y, this.width, this.height, groundbase_options);
    World.add(world, groundplane);
    rect(this.x, this.y, this.width, this.height);
  }
}