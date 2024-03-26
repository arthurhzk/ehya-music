# ehya-music

Este é o README do projeto de reprodução de músicas desenvolvido com o framework Vue, utilizando Firebase, Tailwind CSS e a biblioteca Howler para reprodução de músicas.

## Descrição

Este projeto tem como objetivo criar uma plataforma onde os usuários podem adicionar suas músicas a um banco de dados hospedado no Firebase e reproduzi-las diretamente no navegador. Além disso, os usuários podem ouvir as músicas adicionadas por outros usuários, bem como comentar sobre cada música.

## Funcionalidades

Adicionar Músicas: Os usuários podem fazer upload de novas músicas para o sistema, que serão armazenadas no Firebase Storage.

Reproduzir Músicas: As músicas adicionadas podem ser reproduzidas diretamente no navegador usando a biblioteca Howler.

Explorar Músicas: Os usuários podem explorar e ouvir as músicas adicionadas por outros usuários.

Comentar Músicas: Cada música possui uma seção de comentários onde os usuários podem deixar feedback ou opiniões.

## Tecnologias Utilizadas

Vue.js: Framework JavaScript progressivo para construir interfaces de usuário.

Firebase: Plataforma de desenvolvimento de aplicativos móveis e web desenvolvida pela Google, utilizada para armazenamento de dados e hospedagem de arquivos.

Tailwind CSS: Framework de CSS utilitário altamente personalizável para criação de designs responsivos e eficientes.

Howler.js: Biblioteca JavaScript para reprodução de áudio no navegador.

## Como executar este projeto

git clone https://github.com/arthurhzk/ehya-music.git
cd ehya-music

Instale as dependências:

Configure o Firebase:

Crie um projeto no Firebase (https://console.firebase.google.com/).
Adicione o SDK do Firebase ao seu projeto Vue.
Configure as regras de segurança e a autenticação conforme necessário.

Execute o projeto:
npm run dev
