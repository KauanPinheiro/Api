    
// Importando o módulo express para criar uma aplicação
// web usando o node 

// a função require é semelhante ao import do react,ele serve para importa módulos para o projeto 
    const express = require('express');

// iniciando a aplicação 
    const app = express();

// definindo a porta na qual o servidor vai rodar 
    const port = 3000;

    const produtosRoutes = require('./routes/produtosRoutes');
    app.use(express.json());
    app.use ('/produtos', produtosRoutes)

    const funcionariosRoutes = require('./routes/funcionariosRoutes');
    app.use('/funcionarios', funcionariosRoutes)    

    app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    });

    app.get('/', (req,res) => {
        res.json({messagem: 'Oba! rodou :)'});
    });

    app.get('/user', (req,res) => {
        res.json({id: 1 , nome: 'Kauan' , profissao: 'Operador de caixa '})
    });

    