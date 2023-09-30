export default class Game {
    static incrementId = 1;
  
    constructor(title, description, price, quantity) {
      this.id = Game.incrementId++;
      this.title = title;
      this.description = description;
      this.price = price;
      this.quantity = quantity;
    }
  
  }