import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/toDoRoutes.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;




app.get('/', (req,res) => {
    res.status(200).send('Homepages');
})


app.use('/todo', todoRoutes)
app.use('/auth', authRoutes)




app.use((req,res) => {
    res.status(404).send('404 - Page Not Found');
})

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}/`)
}) 








