
export default class Achat {
    static incrementId = 1;
  
    constructor(boughtDate,user,game) {
      this.id = Achat.incrementId++;
      this.boughtDate = boughtDate;
      this.users = user; 
      this.games = game; 
    }
  }