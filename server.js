import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import { bookingRouter } from './routes/Routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

/* Connect -> Mongoose  */

mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) { return console.log(err) }
    console.log('Mongodb connection established')
  })
console.log('connecting to MongoDB')

app.use('/api', bookingRouter)

/*    { HomePage}   */
app.get('/', (req, res) => {
  res.send('Welcome !!!')
})
app.listen(PORT, () => console.log('the Server is Connected Successfully', PORT))
