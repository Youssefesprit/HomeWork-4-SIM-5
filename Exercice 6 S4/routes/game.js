import express from 'express';
import { getAllGames, addGame,getGamesById,updateGame } from '../controllers/game.js';


const router = express.Router();


// ----------Game-----------
router
    .route('/')
    .get(getAllGames)
    .post(addGame);
router
    .route('/:id')
    .put(updateGame)
    .get(getGamesById);
// -------------------------

export default router;