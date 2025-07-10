import express from 'express';


const router = express.Router();

router.get('/', (req,res) => {
    res.send('ToDo routes')
})

router.post('/', (req,res) => {
    res.send('ToDo add')
})


router.put('/', (req,res) => {
    res.send('ToDo routes update')
})


router.delete('/', (req,res) => {
    res.send('ToDo routes delete')
})




export default router; 