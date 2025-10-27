# 🪙 Conversor de Moedas

Um projeto de aplicação web full-stack que permite aos usuários converter valores entre diferentes moedas, utilizando taxas de câmbio atualizadas. A aplicação é dividida em um frontend interativo e um backend que gerencia a lógica de negócio.

## ✨ Funcionalidades

-   **Conversão em Tempo Real:** Insira um valor e veja a conversão instantaneamente.
-   **Seleção Ampla de Moedas:** Suporte para uma vasta gama de moedas globais.
-   **Interface Intuitiva:** Design limpo e fácil de usar para uma experiência de usuário agradável.
-   **Arquitetura desacoplada:** Frontend e Backend separados para melhor manutenibilidade e escalabilidade.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas do ecossistema JavaScript:

-   **Backend:**
    -   [Node.js](https://nodejs.org/): Ambiente de execução para o JavaScript no servidor.
    -   [Express.js](https://expressjs.com/pt-br/): Framework minimalista para criar a API REST.
    -   **API Externa:** Utiliza uma API de terceiros (como [ExchangeRate-API](https://www.exchangerate-api.com/) ou outra de sua escolha) para obter as taxas de câmbio.

-   **Frontend:**
    -   [React](https://react.dev/) / [Vue.js](https://vuejs.org/) / [Angular](https://angular.io/): (Escolha a que você usou) Framework JavaScript para construir a interface de usuário.
    -   [Axios](https://axios-http.com/): Cliente HTTP para fazer requisições à API do backend.
    -   CSS / SASS / Styled-Components: Para estilização dos componentes.

-   **Ferramentas:**
    -   [Git](https://git-scm.com/): Para versionamento de código.
    -   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/): Gerenciador de pacotes.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm ou Yarn
-   Uma chave de API de um serviço de taxas de câmbio (se o backend precisar).

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/currency-converter.git
    cd currency-converter
    ```

2.  **Configure o Backend:**
    ```bash
    cd backend
    npm install
    ```
    -   Crie um arquivo `.env` na pasta `backend` e adicione suas variáveis de ambiente (como a chave da API).
    ```env
    # Exemplo de arquivo .env
    API_KEY=SUA_CHAVE_DE_API_AQUI
    PORT=3001
    ```

3.  **Configure o Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

### Executando a Aplicação

1.  **Inicie o servidor do backend:**
    ```bash
    # No diretório /backend
    npm start
    ```
    O servidor estará rodando em `http://localhost:3001` (ou na porta que você definiu).

2.  **Inicie a aplicação do frontend:**
    ```bash
    # Em outro terminal, no diretório /frontend
    npm start
    ```
    A aplicação estará acessível em `http://localhost:3000`.

---

## 📂 Estrutura de Pastas

O projeto está organizado em uma estrutura de monorepo simples:
