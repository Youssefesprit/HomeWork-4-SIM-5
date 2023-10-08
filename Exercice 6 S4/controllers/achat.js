import Achat from "../models/achat.js";
import User from "../models/user.js";
import Game from "../models/game.js";


  

export function addAchat(req, res) {
    const userId = req.params.userId;
    const gameId = req.params.gameId;
    const dateNow = new Date();

    try {
        const user =  User.findById(userId);
        const game =  Game.findById(gameId);

        if (!user || !game) {
            return res.status(404).json({ message: 'User or game not found' });
        }

    
        if (user.wallet < game.price) {
            return res.status(400).json({ message: 'out of budget' });
        }

    
        const achat = Achat.create({
            date: dateNow,
            userId: user._id,
            gameId: game._id
        });


        user.wallet -= game.price;
         user.save();

        res.status(201).json(achat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}






