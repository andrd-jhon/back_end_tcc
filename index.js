const express = require('express')
const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)
    console.log('usuario armazenado na variavel users!')
    res.status(201).json(users)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
    console.log('listando todos os usuarios')
})

app.listen(5000, () => {
    console.log('backend funcionando!')
})