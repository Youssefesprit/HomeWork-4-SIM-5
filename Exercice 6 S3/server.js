import express from 'express';


const app = express();

const port = process.env.PORT || 9090;

import usersRoutes from './routes/user.js';

app.use(express.json());

app.use('/user',usersRoutes);

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})