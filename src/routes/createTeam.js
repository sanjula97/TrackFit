import express from 'express'
import verify from './varifyToken'
import Team from '../models/team'

const router = express();

router.post('/', verify ,async (req,res) => {
    // res.send(req.user)
    // Create a new Team
    const team = new Team({
        name: req.body.name,
        leader: req.user._id
    });

        await team.save();
        res.send({team: team.name })

    
});

export default router;