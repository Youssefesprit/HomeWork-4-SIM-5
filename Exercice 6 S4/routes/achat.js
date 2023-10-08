import express from 'express';
import { addAchat } from '../controllers/achat.js';

const router = express.Router();

// ----------Achat-----------
router
    .route('/:userId/:gameId')
    .post(addAchat);
// -------------------------

export default router;