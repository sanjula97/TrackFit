import express from "express"

import connectDB from './config/db'

const app = express();

//Import Routes
import authRoute from './routes/auth'
import createTeamRoute from './routes/createTeam'

//connect to mongoDB
connectDB();

//MIddleware
app.use(express.json());

//Routes middleware
app.use('/api/user',authRoute);
app.use('/api/createTeam',createTeamRoute);


const PORT = process.env.PORT || 5001 ;

app.listen(PORT, () => {
    console.log(`App started on PORT ${PORT}`)
});


