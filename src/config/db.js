import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


const connectDB = async () => {
    try {
        await connect(process.env.DB_CONNECT, {
             useNewUrlParser: true,
             useUnifiedTopology: true 
            });
        console.log("Data base connected");
        
    } catch (error) {
        console.log(error.messaage);
    }
}

export default connectDB;