import express from 'express'

var router = express.Router();

router.post('/register' , (req,res) => {
    res.send('Reguster');
});

export default router;