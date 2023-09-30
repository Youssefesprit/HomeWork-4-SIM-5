import Achat from "../models/achat.js";
import games from "./game.js";
import users from "./user.js";


var achatList =[];
  

export function achat(req, res) {
    const userId = req.params.userId;
    const gameId = req.params.gameId;
    const datenow = new Date();

    const user = users.find((u) => u.id == userId);
    const game = games.find((g) => g.id == gameId);
    console.log(user,game);
    if (!user || !game) {
        return res.status(404).json({ message: 'User or game not found' });
    }

    // Check if the user has enough money to buy the game
    if (user.wallet < game.price) {
        return res.status(400).json({ message: 'Insufficient funds' });
    }

    const achat = new Achat(datenow,user,game);
    
    achatList.push(achat);
    user.wallet -= game.price;

    res.status(201).json(achat);
}
