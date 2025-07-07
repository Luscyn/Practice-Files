import express from 'express';

const router = express.Router();


router.get('/register', (req,res)=>{
    res.send("Register")
})

router.post('/register', (req,res)=>{
    
})

router.post('/login', (req,res)=>{
    
})

export default router;