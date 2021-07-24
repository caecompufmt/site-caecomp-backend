# Site CAECOMP - Backend 🌐

<h1 align="center">
    <img alt="CAECOMP - Backend" src="assets/logo-caecomp.png" height="250px" />
    <br/>
  <a href="https://docs.adonisjs.com/guides/introduction" target="_blank" rel="noopener">AdonisJs</a> | <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a>
</h1>

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20by-CAECOMP%20UFMT-blue?style=flat&logo=Awesome-Lists">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/caecompufmt/site-caecomp-backend?color=informational&style=flat&logo=GitHub-Actions">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/caecompufmt/site-caecomp-backend?color=important&style=flat&logo=Typescript">
<p>

<h3 align="center">
  <a href="#-sobre">Sobre</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> · </span>
  <a href="#-como-usar">Como usar</a>
</h3>

## 💭 Sobre

Backend do site do CAECOMP UFMT

## 👨‍💻 Tecnologias Utilizadas

- <a href="https://docs.adonisjs.com/guides/introduction" target="_blank" rel="noopener">AdonisJs</a>
- <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a>
- <a href="https://www.docker.com/" target="_blank" rel="noopener">Docker</a>

## ⁉ Como usar

### 🤔 Pré-requisitos

Para conseguir utilizar a aplicação sem nenhum problema é necessário ter:

- Ter em sua máquina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplicação
- Ter o **<a href="https://www.docker.com/" target="_blank" rel="noopener">Docker</a>** para facilitar o setup do banco de dados
- E não menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o repositório em seu computador

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/caecompufmt/site-caecomp-backend.git
  # Entre na pasta raiz da aplicação
  $ cd site-caecomp-backend
```

2. Instalar as dependências da aplicação

```sh
  $ yarn # ou npm install
```

3. Configurar as variáveis de ambiente

Crie um arquivo chamado de '.env' copiando as informações existentes no arquivo '.env.example', será necessário alterar o valor do item 'DB_VOLUME'
para um caminho de uma pasta criada onde você achar melhor.

- Exemplo no windows:
DB_VOLUME="/C/Users/Public/database"

- Exemplo no Linux/MacOS:
DB_VOLUME="/Users/usuario/Desktop/database"

Esse caminho servirá para persistir os valores no banco de dados do docker

4. Inicar o docker da aplicação e rodar as migrations

```sh
  # Comando para iniciar o docker
  $ docker-compose up -d
  # Comando para rodar as migrations 
  $ node ace migration:run
```

5. Inicar a aplicação

```sh
  # Comando para iniciar a aplicação em modo de desenvolvimento
  $ yarn dev
```

---

<sup> Feito com 💙 por <a href="https://github.com/caecompufmt" target="_blank" rel="noopener">CAECOMP - UFMT</a>
