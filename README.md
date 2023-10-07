```markdown
# API-CRUD-RESTful

Este projeto é uma implementação simples de um CRUD (Create, Read, Update e Delete) para um modelo de aluno utilizando Express, Sequelize e MySQL.

## Configuração

Para configurar o projeto, siga os passos abaixo:

1. Crie um banco de dados MySQL chamado "alunos".
2. Crie um usuário com privilégios de acesso ao banco de dados "alunos".
3. Modifique as configurações do Sequelize no arquivo `app.js` para refletir o nome do banco de dados, o nome de usuário e a senha criados anteriormente.

## Execução

Para executar o projeto, siga os passos abaixo:

1. Instale as dependências utilizando o comando:

   ```bash
   npm install
   ```
```
2. Inicie o servidor utilizando o comando:

   ```bash
   npm start
   ```

## Operações CRUD

Para realizar as operações CRUD, você pode utilizar o seguinte comando no terminal Bash:

```bash
curl -X <método> -H "Content-Type: application/json" -d '{<dados>}' http://localhost:<porta>/alunos
```

Aqui está o significado de cada parte do comando:

- `<método>`: O método HTTP que você deseja executar (POST, GET, PUT ou DELETE).
- `<dados>`: O corpo da solicitação no formato JSON.
- `<porta>`: A porta em que o servidor está sendo executado (normalmente 3000).

## Exemplos

A seguir, alguns exemplos de como usar o projeto:

### Criar um aluno

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "nome": "João da Silva",
  "idade": 20
}' http://localhost:3000/alunos
```

### Listar todos os alunos

```bash
curl http://localhost:3000/alunos
```

### Buscar um aluno por ID

```bash
curl http://localhost:3000/alunos/1
```

### Atualizar um aluno

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nome": "Maria da Silva",
  "idade": 21
}' http://localhost:3000/alunos/1
```

### Deletar um aluno

```bash
curl -X DELETE http://localhost:3000/alunos/1
```

## Validação

O projeto utiliza o Express-Validator para validar os dados de entrada. Os campos `nome` e `idade` devem ser preenchidos. O campo `nome` deve ser uma string e o campo `idade` deve ser um número inteiro.

## Erros

Se a validação falhar, o projeto retornará um erro HTTP 400 com uma lista de erros.

## Informações Adicionais

- O projeto utiliza o Sequelize para conectar ao banco de dados MySQL.
- O projeto utiliza o express-validator para validar os dados de entrada.
- O projeto utiliza o body-parser para converter o corpo da solicitação JSON em um objeto JavaScript.

## Autor

Felipe Brigagão Santos
