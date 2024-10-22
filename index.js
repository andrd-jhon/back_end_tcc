const express = require('express')
const app = express()
app.use(express.json())

const userModel = require('./model/userModel')

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)
    console.log('usuario armazenado na variavel users!')
    res.status(201).json(users)
})

app.get('/usuarios', (req, res) => {
    // res.status(200).json(users)

    userModel.findAll()
    .then(
        (response) => {
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'USUARIOS LISTADOS COM SUCESSO',
                    data:response
                }
            )
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS LIVROS',
                errorObject:error
            }
        );
    });
    console.log('listando todos os usuarios')
})

app.listen(5000, () => {
    console.log('backend funcionando!')
})