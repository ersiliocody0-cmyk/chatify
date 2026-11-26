import express from 'express'

const messages = express.Router()

messages.get('/send', (req,res)=> {
    res.send('sms enviada')
})
export default messages; 