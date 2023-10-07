# API-CRUD-RESTful
CRUD simples de alunos usando Express, Sequelize e MySQL
Este código implementa um CRUD simples para um modelo de aluno usando Express, Sequelize e MySQL.

Configuração
Para configurar o código, você precisará criar um banco de dados MySQL chamado alunos e um usuário com privilégios de acesso a esse banco de dados.

Após criar o banco de dados e o usuário, você precisará alterar as configurações do Sequelize no arquivo index.js.

Execução
Para executar o código, você precisará instalar as dependências usando o comando npm install.

Em seguida, você poderá iniciar o servidor usando o comando npm start.

Operações CRUD
Para executar as operações CRUD, você pode usar o seguinte comando no bash:

curl -X <método> -H "Content-Type: application/json" -d '{<dados>}' http://localhost:<porta>/alunos


Onde:

* `<método>` é o método HTTP que você deseja executar.
* `<dados>` é o corpo da solicitação JSON.
* `<porta>` é a porta na qual o servidor está sendo executado.

## Exemplos

Aqui estão alguns exemplos de como usar o código:

**Criar um aluno**

curl -X POST -H "Content-Type: application/json" -d '{
"nome": "João da Silva",
"idade": 20
}' http://localhost:3000/alunos


**Listar todos os alunos**

curl http://localhost:3000/alunos


**Buscar um aluno por ID**

curl http://localhost:3000/alunos/1


**Atualizar um aluno**

curl -X PUT -H "Content-Type: application/json" -d '{
"nome": "Maria da Silva",
"idade": 21
}' http://localhost:3000/alunos/1


**Deletar um aluno**

curl -X DELETE http://localhost:3000/alunos/1

Validação
O código usa Express-Validator para validar os dados de entrada. Os campos nome e idade devem ser preenchidos. O campo nome deve ser uma string e o campo idade deve ser um número inteiro.

Erros
Se a validação falhar, o código retornará um erro HTTP 400 com uma lista de erros.

Outras informações
O código usa Sequelize para conectar ao banco de dados MySQL.
O código usa express-validator para validar os dados de entrada.
O código usa body-parser para converter o corpo da solicitação JSON em um objeto JavaScript.
