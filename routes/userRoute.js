const userModel = require('../model/userModel')
const express = require('express')
const router = express.Router()
const validation = require('../utils/validation');
// import {existsOrError} from '../utils/validation'


const { Utils } = require('sequelize');

router.get('/', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});

router.get('/usuarios', (req, res) => {
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

router.post('/usuarios', (req, res)=>{
    console.log('entrou no inserir usuarios')
    let { userName, userEmail, userPassword, userPasswordConfirm } = req.body;

    try {
        validation.existsOrError(userName, "nome não informado!")
        validation.existsOrError(userEmail, "E-mail não informado!")
        validation.existsOrError(userPassword, "Senha não informada!")
        validation.existsOrError(userPasswordConfirm, "Confirmação de senha não informada!")
        validation.equalsOrError(userPassword, userPasswordConfirm, "As senhas devem ser iguais!")
    }catch (msg){
        return res.status(400).send(msg)
    }
    
    console.log(req.body)
    delete req.body.userPasswordConfirm
    console.log(req.body)

    
    userModel.create(
        {
            userName,
            userEmail,
            userPassword
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'USUÁRIO CADASTRADO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO SALVAR USUÁRIO',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE INSERÇÃO DE LIVRO!'});

});

module.exports = router