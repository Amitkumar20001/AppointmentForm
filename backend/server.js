import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './UserRouter.js';

const app = express();
dotenv.config({path: './.env'});

const DB = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(express.json());

mongoose.connect(DB).then(() => {      //mongoose.connect() returns a promise
        console.log("Connection successful");
}).catch(() => {
    console.log("Error in connection");
});       

app.use('/',userRouter);
app.listen(PORT,function(){
    console.log('server is ready at http://localhost:5000');
})