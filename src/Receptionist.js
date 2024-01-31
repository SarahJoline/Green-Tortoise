class Receptionist {
  constructor(position) {
    this.position = position;
  }

  draw(context) {
    context.fillStyle = "green";
    context.fillRect(this.position.x, this.position.y, 30, 30);
  }
}

export default Receptionist;
