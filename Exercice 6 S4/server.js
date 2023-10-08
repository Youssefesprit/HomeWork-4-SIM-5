import express from 'express';
import mongoose from 'mongoose';

const app = express();

const port = process.env.PORT || 9090;

import usersRoutes from './routes/user.js';
import gamesRoutes from './routes/game.js';
import achatsRoutes from './routes/achat.js';

app.use(express.json());

const databaseName = "homework";


mongoose.set("debug", true);


mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`)

    .then(() => {

        console.log(`Connected to ${databaseName}`);
    })
    .catch(err => {

        console.log(err)

    });


app.use('/user', usersRoutes);
app.use('/game', gamesRoutes);  
app.use('/achat', achatsRoutes);

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})