import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'

dotenv.config()
//varibles definitaions 
const app = express()
const port = process.env.PORT || 3000;

//use section
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)

app.get('/', (req,res) => {
  res.json({message : 'api working'})
})

app.listen(port,()=> console.log(`Server is running on port${port} http://localhost:${port}`))