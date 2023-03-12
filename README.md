# ISI-03

Esse código é um sistema simples de gerenciamento de celulares utilizando Node.js e PostgreSQL. A aplicação consiste em uma página HTML (celulares.js) que lista todos os celulares cadastrados no banco de dados, e um servidor Node.js (app.js) que fornece as rotas para criar, ler, atualizar e excluir celulares no banco de dados.

A página HTML usa o framework Bootstrap para renderizar a lista de celulares. Cada celular é exibido como um item de lista, com uma imagem, nome, especificações e valor. Para cada celular, há botões para editar e excluir o celular.

O servidor Node.js usa a biblioteca Express para lidar com as rotas da aplicação. Ele usa a biblioteca pg para se conectar ao banco de dados PostgreSQL. Quando um usuário acessa a página principal (/), o servidor faz uma consulta ao banco de dados para obter todos os celulares cadastrados e renderiza a página HTML com a lista de celulares.

Quando o usuário envia um formulário de adição de um novo celular, o servidor faz uma consulta SQL de inserção no banco de dados. Quando o usuário envia um formulário de atualização de um celular existente, o servidor faz uma consulta SQL de atualização no banco de dados. Quando o usuário clica no botão de excluir um celular, o servidor faz uma consulta SQL de exclusão no banco de dados.

As consultas SQL são feitas usando o objeto Pool da biblioteca pg, que gerencia as conexões com o banco de dados. O servidor usa o middleware body-parser para analisar os dados enviados pelo formulário HTTP.

O código HTML usa a sintaxe EJS (Embedded JavaScript) para inserir os dados dos celulares renderizados pelo servidor. A página HTML também usa o JavaScript do Bootstrap para exibir o modal de edição quando o usuário clica no botão de editar um celular.
