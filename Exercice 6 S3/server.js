import express from 'express';


const app = express();

const port = process.env.PORT || 9090;

import usersRoutes from './routes/user.js';

app.use(express.json());

const databaseName = "GameDB";


mongoose.set("debug", true);


mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost:27017/${databaseName}`)

    .then(() => {

        console.log(`Connected to ${databasellame}`);
    })
    .catch(err => {

        console.log(err)

    });


app.use('/user', usersRoutes);

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})