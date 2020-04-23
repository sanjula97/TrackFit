import express from "express"

import connectDB from './config/db'

const app = express();

//connect to mongoDB
connectDB();

//Import Routes
import authRoute from './routes/auth'

//Routes middleware
app.use('/api/user',authRoute);


const PORT = process.env.PORT || 5001 ;

app.listen(PORT, () => {
    console.log(`App started on PORT ${PORT}`)
});


