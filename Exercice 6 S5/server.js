import express from 'express';
import mongoose from 'mongoose';
import usersRoutes from './routes/user.js';
import gamesRoutes from './routes/game.js';
import achatsRoutes from './routes/achat.js';
import morgan from 'morgan';
import { notFoundError,errorHandler  } from './middlewares/error-handler.js';
import cors from 'cors';

const port = process.env.PORT || 9090;
const databaseName = "homework";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/img',express.static('public/images'));
// Router
app.use('/user', usersRoutes);
app.use('/game', gamesRoutes);
app.use('/achat', achatsRoutes);
// middlewares 
app.use(notFoundError);
app.use(errorHandler);



mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`)
    .then(() => {
        console.log(`Connected to ${databaseName}`);
    })
    .catch(err => {
        console.log(err)
    });



app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})