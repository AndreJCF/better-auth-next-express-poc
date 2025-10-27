# better-auth-next-express-poc

[![Status: POC](https://img.shields.io/badge/Status-POC-blue.svg)](https://en.wikipedia.org/wiki/Proof_of_concept)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<div align="center">
  <strong>
    <a href="#-english">🇬🇧 English</a>
    •
    <a href="#-português">🇵🇹 Português</a>
  </strong>
</div>

---

<a name="-english"></a>

## 🇬🇧 English

### Overview

This repository is a **Proof of Concept (POC)** for integrating [better-auth.com](https://better-auth.com) with a decoupled full-stack application.

The main goal is to test and validate the 'raw' authentication flow on this specific stack before implementing it in a larger, main project.

### Tech Stack

* **Frontend:** Next.js (React)
* **Backend:** Express.js
* **Database:** PostgreSQL
* **Authentication:** better-auth.com

### Getting Started

This guide assumes the project is structured with two main folders: `/frontend` and `/backend`.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AndreJCF/better-auth-next-express-poc.git](https://github.com/AndreJCF/better-auth-next-express-poc.git)
    cd better-auth-next-express-poc
    ```

2.  **Set up Environment:**
    * Create a `.env` file in the `/backend` directory (based on `.env.example`).
    * Add your PostgreSQL connection string and better-auth credentials.

3.  **Run the Backend:**
    ```bash
    # In one terminal
    cd backend
    npm install
    npm start
    ```

4.  **Run the Frontend:**
    ```bash
    # In a new terminal
    cd frontend
    npm install
    npm run dev
    ```

---

<a name="-português"></a>

## 🇵🇹 Português

### Visão Geral

Este repositório é uma **Prova de Conceito (POC)** para a integração do [better-auth.com](https://better-auth.com) com uma aplicação full-stack desacoplada.

O objetivo principal é testar e validar o fluxo de autenticação 'puro' (raw) nesta stack específica antes de o implementar num projeto principal de maior dimensão.

### Stack Tecnológica

* **Frontend:** Next.js (React)
* **Backend:** Express.js
* **Base de Dados:** PostgreSQL
* **Autenticação:** better-auth.com

### Como Começar

Este guia assume que o projeto está estruturado com duas pastas principais: `/frontend` e `/backend`.

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/AndreJCF/better-auth-next-express-poc.git](https://github.com/AndreJCF/better-auth-next-express-poc.git)
    cd better-auth-next-express-poc
    ```

2.  **Configurar o Ambiente:**
    * Crie um ficheiro `.env` na pasta `/backend` (com base no `.env.example`).
    * Adicione a sua connection string do PostgreSQL e as credenciais do better-auth.

3.  **Executar o Backend:**
    ```bash
    # Num terminal
    cd backend
    npm install
    npm start
    ```

4.  **Executar o Frontend:**
    ```bash
    # Num novo terminal
    cd frontend
    npm install
    npm run dev
    ```

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
