import express from 'express';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';


const app = express();

app.use(express.json()); // Allowa

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/', (req,res)=>{
    res.send("Homepage");
})

app.use('/auth', authRoutes)
app.use('/todo', todoRoutes)