const express = require('express');
const router = express.Router();
const dbConecta = require('../models/dbConnection');


router.get('/', (req,res) => {
    const query = ('select * from tbfuncionario');
    dbConecta.query(query, (err,result) => {
        if(err) throw err;
            res.json(result)
    })
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const queryId = (`select * from tbfuncionario where id_funcionario = ${id}`);
    dbConecta.query(queryId, (err,result) =>{
        if(err) throw err;
            res.json(result)
    })
})      

// Insírindo funcionario no banco 
router.post('/', (req,res) => {
    const {id_funcionario, nome, email, telefone, cpf, datanascimento, endereco} = req.body;
    const queryInst = 'insert into tbfuncionario(id_funcionario,nome,email,telefone,cpf,datanascimento) values(?,?,?,?,?,?,?)';

    dbConecta.query(queryInst, [id_funcionario,nome,email,telefone,cpf,datanascimento,endereco], (err) => {
        if(err) throw err;
            res.status(201).json({
                mensagem: "Funcionário insírido com sucesso!",
                body: req.body
            });
    });
});

module.exports = router;