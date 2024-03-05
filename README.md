# gerenciador-livros
Projeto realizado como desafio fullstack utilizando React e Spring Boot, nesse projeto é possivel abrir para visualizar os dados de um livro, cadastrar um novo, editar um livro, e ver a lista de livros cadastrados.

![Captura de tela 2024-03-05 111546](https://github.com/MylennaAlcantara/gerenciador-livros/assets/93752575/88edb0ce-8787-4201-8198-65b144de6174)

![Captura de tela 2024-03-05 121809](https://github.com/MylennaAlcantara/gerenciador-livros/assets/93752575/12828d76-d42e-40a7-9483-15774c717908)

![Captura de tela 2024-03-05 111807](https://github.com/MylennaAlcantara/gerenciador-livros/assets/93752575/d199fb9a-33bb-45f7-8898-b52d69214ab4)

**Requisitos**
1- Ter instalado o Java 17 no computador.
2- Ter instalado o Node no computador.
3- Ter MySQL instalado no computador.

**Instruções para rodar o projeto**
1- Realize o download do projeto ou clone o repositorio.
2- Após isso abra a pasta "backend", abra a pasta main, em seguida resources e abra o arquivo "application.properties", modifique aonde tem:
spring.datasource.username=admin
spring.datasource.password=1234
para:
spring.datasource.username=seuUsuarioDoMySQL
spring.datasource.password=suaSenhaDoMySQL
3- Em seguida entre em src e depois em target, abra o prompt de comando nessa pasta e digite: java -jar backend-0.0.1-SNAPSHOT.jar
4- Caso tenha mais de um java no seu computador, substituir aonde tem "java" pelo caminho do executavel do java 17 que fica dentro da pasta programas no computador.
5- Vá para a pasta frontend, abra o prompt de comando na pasta e digite: npm install
6- Após finalizar, digite o comando: npm start, irá iniciar o projeto em uma nova aba do navegador, caso não abra, digite http://localhost:3000 no seu navegador

OBS.: Está configurado para criar um novo schema caso não exista, junto com a tabela, assim que rodar o projeto backend.

**Tecnologias utilizadas**
- React js.
- TypeScript.
- HTML.
- CSS.
- Styled Components.
- React Hooks.
- React Router.
- Java.
- Spring Boot.
- MySQL
- Maven.

## Tarefa Front-end:
- [X] Criar uma interface de usuário para visualizar, adicionar, deletar e atualizar
itens.
- A interface deve incluir:
- [X] Uma página principal exibindo todos os itens.
- [X] Formulários para adicionar e atualizar itens.
- [X] Opções para deletar itens diretamente na lista.
- [X] Opção para visualizar detalhes de cada item.
- [X] A interface deve ser responsiva e ter um design atraente.

## Tarefa Back-end:
- [X] Desenvolver uma API RESTful para gerenciar a coleção de itens.
- A API deve fornecer endpoints para:
- [X] Listar todos os itens (GET).
- [X] Obter detalhes de um item específico (GET com ID).
- [X] Adicionar um novo item (POST).
- [X] Atualizar um item existente (PUT/PATCH).
- [X] Remover um item (DELETE).
- [X] Integrar a API com um banco de dados (MySQL ou Postgres) para
persistência dos dados.

