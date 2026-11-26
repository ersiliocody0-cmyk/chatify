import express from 'express'

const router = express.Router()

router.get('/signup', (req, res) => {
    res.send('signape endpoint ')
})

router.get('/login', (req, res) => {
    res.send('login page')
})

router.get('/logout', (req, res) => {
    res.send('logout endpoint')
})

export default router;
