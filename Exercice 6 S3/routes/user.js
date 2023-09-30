import express from 'express';
import { addUser, updateUser, login , getAllUsers} from '../controllers/user.js';
import { getAllGames, addGame,getGamesById,updateGame } from '../controllers/game.js';
import { achat } from '../controllers/achat.js';

const router = express.Router();

// ----------User-----------
router.post('/addUser', addUser);
router.put('/updateUser/:id', updateUser);
router.get('/login/:username', login);
router.get('/', getAllUsers);
// -------------------------

// ----------Game-----------
router.get('/getAllGames', getAllGames);
router.put('/updateGame/:id', updateGame);
router.get('/getGamesById/:id', getGamesById);
router.post('/addGame', addGame);
// -------------------------
// ----------Achat-----------
router.post('/achat/:userId/:gameId',achat );
// -------------------------

export default router;
