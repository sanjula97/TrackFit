import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        max: 1024
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'channel'
    },
});

export default mongoose.model('Message',messageSchema)