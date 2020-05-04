import mongoose from 'mongoose'

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    open: Boolean,
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'message'
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
});

export default mongoose.model('Channel',channelSchema)