import express from 'express';


const router = express.Router();

router.get('/', (req,res) => {
    res.send('auth routes')
})

router.post('/', (req,res) => {
    res.send('auth add')
})


router.put('/', (req,res) => {
    res.send('auth routes update')
})


router.delete('/', (req,res) => {
    res.send('auth routes delete')
})




export default router; 