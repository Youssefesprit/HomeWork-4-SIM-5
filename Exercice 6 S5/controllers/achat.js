import Achat from "../models/achat.js";
import User from "../models/user.js";
import Game from "../models/game.js";


  

export async function addAchat(req, res) {
    const userId = req.params.userId;
    const gameId = req.params.gameId;
    const dateNow = new Date();

    try {
        const  user = await User.findById(userId);
        const game = await Game.findById(gameId);

        if (!user || !game) {
            return res.status(404).json({ message: 'User or game not found' });
        }

    
        if (user.wallet < game.price) {
            return res.status(400).json({ message: 'out of budget' });
        }

    
        const achat = await Achat.create({
            boughtDate :dateNow,
            user: user._id,
            game: game._id
        });


        user.wallet -= game.price;
        await user.save();

        res.status(201).json(achat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}






