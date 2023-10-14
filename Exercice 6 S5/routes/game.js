import express from 'express';
import { getAllGames, addGame,getGamesById,updateGame } from '../controllers/game.js';
import { body } from 'express-validator';


const router = express.Router();


// ----------Game-----------
router
    .route('/')
    .get(getAllGames)
    .post(
        body('title').isLength({min : 5}),
        body('quantity').isNumeric(),
        body('price').isNumeric(),
        addGame);
router
    .route('/:id')
    .put(updateGame)
    .get(getGamesById);
// -------------------------

export default router;