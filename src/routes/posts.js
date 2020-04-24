import express from 'express'
import verify from './varifyToken'

const router = express();

router.get('/', verify ,(req,res) => {
    res.send(req.user)
});

export default router;