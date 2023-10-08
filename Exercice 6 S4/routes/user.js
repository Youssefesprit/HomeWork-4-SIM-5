import express from 'express';
import { addUser, updateUser, login } from '../controllers/user.js';

const router = express.Router();

// ----------User-----------
router
    .route('/')
    .get(login)
    .post(addUser);
router
    .route('/:id')
    .put(updateUser);
// -------------------------



export default router;
