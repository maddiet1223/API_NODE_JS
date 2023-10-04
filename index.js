import express  from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';


const app = express();
const  PORT = 5000;


//we will be using json data in the application

app.use(bodyParser.json());

app.use('/users',usersRoutes);


//home page 
app.get('/',(req,res)=>{
    // console.log('[TEST]!');

    res.send('Hello from home page.')
});

app.listen(PORT,()=>console.log(`Server Running on port:'http://localhost:${PORT}`));





