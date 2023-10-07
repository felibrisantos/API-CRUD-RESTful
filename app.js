const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const { validationResult, body } = require("express-validator");

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Sequelize para conectar ao banco de dados MySQL
const sequelize = new Sequelize("alunos", "usuario", "senha", {
  host: "localhost",
  dialect: "mysql",
});

// Definição do modelo Aluno
const Aluno = sequelize.define("Aluno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Middleware de validação para o campo 'nome' (deve ser uma string não vazia)
const validateNome = body("nome").isString().notEmpty();

// Middleware de validação para o campo 'idade' (deve ser um número inteiro)
const validateIdade = body("idade").isInt();

// Middleware para verificar se houve erros de validação
const validateErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Middlewares
app.use(bodyParser.json());

// Rotas CRUD para Aluno
app.get("/alunos", async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os alunos" });
  }
});

app.post(
  "/alunos",
  [validateNome, validateIdade, validateErrors], // Aplicar validação
  async (req, res) => {
    try {
      const aluno = await Aluno.create(req.body);
      res.status(201).json(aluno);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar o aluno" });
    }
  }
);

app.get("/alunos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const aluno = await Aluno.findByPk(id);
    if (!aluno) {
      res.status(404).json({ error: "Aluno não encontrado" });
    } else {
      res.json(aluno);
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o aluno" });
  }
});

app.put(
  "/alunos/:id",
  [validateNome, validateIdade, validateErrors], // Aplicar validação
  async (req, res) => {
    const id = req.params.id;
    try {
      const [updated] = await Aluno.update(req.body, {
        where: { id },
      });
      if (updated) {
        const updatedAluno = await Aluno.findByPk(id);
        res.json(updatedAluno);
      } else {
        res.status(404).json({ error: "Aluno não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar o aluno" });
    }
  }
);

// Inicialize o servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});
