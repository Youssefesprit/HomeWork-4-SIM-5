export default class User {
    static incrementId = 1;
  
    constructor(username, password, wallet) {
      this.id = User.incrementId++;
      this.username = username;
      this.password = password;
      this.wallet = wallet;
    }
  
  }

 