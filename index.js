const express = require('express')
const app = express()


app.get('/opa', (req, res, next) => {
    res.json(
        [
            {"id": 7, "name":"João"},
            {"id": 8, "name":"Vitor"}
        ]
    )

    next()
})

app.use('/opa', (req, res, next) => {
    
    console.log('fui chamado!!!')
    
})
app.listen(3000, () => {
    console.log('back-end rodando 3')
})