import express from "express"

import connectDB from './config/db'

const app = express();

//Import Routes
import authRoute from './routes/auth'

//connect to mongoDB
connectDB();

//MIddleware
app.use(express.json());

//Routes middleware
app.use('/api/user',authRoute);


const PORT = process.env.PORT || 5001 ;

app.listen(PORT, () => {
    console.log(`App started on PORT ${PORT}`)
});


