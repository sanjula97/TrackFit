import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    members:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    channels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'channel'
    }],
});

export default mongoose.model('Team',teamSchema)