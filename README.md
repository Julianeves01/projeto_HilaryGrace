# 💎 Hilary Grace - Front-end Application

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

**Aplicação front-end desenvolvida com Next.js e React para o sistema Hilary Grace, integrada com API REST do back-end.**

[📋 Documentação](#-índice) • [🚀 Começar](#-instalação-e-configuração) • [🐛 Ajuda](#-problemas-comuns) • [📞 Contato](#-contato)

</div>

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Sistema](#-arquitetura-do-sistema)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
  - [PASSO 1: Configurar o Back-end](#passo-1-configurar-o-back-end)
  - [PASSO 2: Configurar o Front-end](#passo-2-configurar-o-front-end)
- [Executando o Projeto](#-executando-o-projeto)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Problemas Comuns](#-problemas-comuns)
- [Boas Práticas](#-boas-práticas)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 📖 Sobre o Projeto

O **Hilary Grace Front-end** é uma aplicação web moderna desenvolvida com **Next.js 15** e **React 19**, que consome dados de uma API REST desenvolvida em Node.js. A aplicação oferece uma interface intuitiva e responsiva para gerenciamento e visualização de produtos.

### 🎯 Objetivos do Projeto

- ✅ Interface de usuário responsiva e moderna
- ✅ Integração completa com API REST
- ✅ Server-Side Rendering para melhor performance e SEO
- ✅ Código limpo, organizado e escalável
- ✅ Experiência de usuário otimizada

---

## 🛠 Tecnologias Utilizadas

### Front-end

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Next.js](https://nextjs.org/) | 15.5.2 | Framework React com SSR/SSG |
| [React](https://react.dev/) | 19.1.0 | Biblioteca para interfaces de usuário |
| [Axios](https://axios-http.com/) | 1.12.2 | Cliente HTTP para requisições |
| [ESLint](https://eslint.org/) | 9.x | Linter para qualidade de código |

### Back-end (Integração)

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **MySQL** - Sistema de gerenciamento de banco de dados

---

## 🏗 Arquitetura do Sistema

```
┌─────────────────┐          HTTP/HTTPS          ┌─────────────────┐
│                 │ ◄──────────────────────────► │                 │
│   FRONT-END     │         REST API             │    BACK-END     │
│ (Next.js/React) │        (Axios)               │   (Node.js)     │
│                 │                              │                 │
└─────────────────┘                              └────────┬────────┘
                                                          │
                                                          ▼
                                                  ┌─────────────────┐
                                                  │   DATABASE      │
                                                  │    (MySQL)      │
                                                  └─────────────────┘
```

---

## 📋 Pré-requisitos

Você precisa ter instalado em sua máquina:

| Software | Versão Mínima | Link de Download |
|----------|---------------|------------------|
| **Node.js** | 18.x | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.x | Incluído com Node.js |
| **Git** | 2.x | [git-scm.com](https://git-scm.com/) |
| **MySQL** | 8.x | [mysql.com](https://dev.mysql.com/downloads/) |

### Verificar se está instalado:

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Git
git --version

# Verificar MySQL
mysql --version
```

---

## 🚀 Instalação e Configuração

### PASSO 1: Configurar o Back-end

#### 1.1 - Clone o projeto do back-end

```bash
git clone https://github.com/Julianeves01/projeto_HilaryGrace.git
cd projeto_HilaryGrace
```

#### 1.2 - Instale as dependências

```bash
npm install
```

#### 1.3 - Configure o banco de dados

Abra o MySQL e execute:

```sql
CREATE DATABASE hilary_grace03;
```

#### 1.4 - Crie o arquivo .env

Na pasta raiz do back-end, crie um arquivo chamado `.env`:

```bash
# Linux/Mac
touch .env

# Windows (PowerShell)
New-Item .env -ItemType File

# Windows (CMD)
type nul > .env
```

Adicione este conteúdo ao arquivo `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=hilary_grace03
DB_USER=root
DB_PASSWORD=sua_senha_do_mysql_aqui
```

> ⚠️ **IMPORTANTE:** Troque `sua_senha_do_mysql_aqui` pela sua senha real do MySQL!

#### 1.5 - Inicie o back-end

```bash
npm run dev
```

**Saída esperada:**
```bash
🚀 Servidor rodando na porta 3000
✅ Conectado ao banco de dados MySQL
📡 API pronta para receber requisições
```

> ✅ **Sucesso!** Deixe esse terminal aberto rodando.

---

### PASSO 2: Configurar o Front-end

#### 2.1 - Clone o projeto do front-end

Abra um **NOVO terminal** e execute:

```bash
git clone https://github.com/Julianeves01/front-hilaryGrace.git
cd front-hilaryGrace
```

#### 2.2 - Instale as dependências

```bash
npm install
```

Este comando instalará:
- ✅ Next.js 15.5.2
- ✅ React 19.1.0
- ✅ Axios 1.12.2
- ✅ ESLint e outras dependências

#### 2.3 - Crie o arquivo .env.local

Na pasta raiz do front-end, crie um arquivo chamado `.env.local`:

```bash
# Linux/Mac
touch .env.local

# Windows (PowerShell)
New-Item .env.local -ItemType File

# Windows (CMD)
type nul > .env.local
```

Adicione este conteúdo ao arquivo `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

> 💡 **Nota:** Isso diz para o front-end onde encontrar o back-end.

#### 2.4 - Inicie o front-end

```bash
npm run dev
```

**Saída esperada:**
```bash
  ▲ Next.js 15.5.2
  - Local:        http://localhost:3001
  
✓ Ready in 2.5s
```

> ✅ **Sucesso!** O Next.js vai abrir automaticamente em `http://localhost:3001`

---

## 🎯 Executando o Projeto

### Resumo Rápido:

**Terminal 1 (Back-end):**
```bash
cd projeto_HilaryGrace
npm run dev
```

**Terminal 2 (Front-end):**
```bash
cd front-hilaryGrace
npm run dev
```

**Abra o navegador em:** `http://localhost:3001`

---

### ✅ Checklist de Verificação

Antes de usar a aplicação, confirme:

- [ ] MySQL está rodando e acessível
- [ ] Banco de dados `hilary_grace03` foi criado
- [ ] Arquivo `.env` do back-end está configurado corretamente
- [ ] Back-end está executando em `http://localhost:3000`
- [ ] Arquivo `.env.local` do front-end está configurado
- [ ] Front-end está executando em `http://localhost:3001`
- [ ] Não há mensagens de erro nos terminais

---

## 📁 Estrutura de Diretórios

```
front-hilaryGrace/
│
├── 📂 src/                          # Código fonte principal
│   ├── 📂 app/                      # Rotas e páginas (App Router)
│   │   ├── layout.js               # Layout global da aplicação
│   │   ├── page.js                 # Página inicial (/)
│   │   └── ...                     # Outras rotas
│   │
│   ├── 📂 components/               # Componentes React reutilizáveis
│   │   ├── Header.jsx              # Componente de cabeçalho
│   │   ├── Footer.jsx              # Componente de rodapé
│   │   ├── ProductCard.jsx         # Card de produto
│   │   └── ...                     # Outros componentes
│   │
│   └── 📂 styles/                   # Arquivos de estilização
│       ├── globals.css             # Estilos globais
│       └── ...                     # Outros estilos
│
├── 📂 public/                       # Arquivos públicos estáticos
│   ├── favicon.ico                 # Ícone do site
│   ├── images/                     # Imagens
│   └── ...                         # Outros assets
│
├── 📄 .env.local                   # Variáveis de ambiente (NÃO COMITAR!)
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
├── 📄 next.config.mjs              # Configurações do Next.js
├── 📄 package.json                 # Dependências e scripts
├── 📄 jsconfig.json                # Configurações JavaScript
├── 📄 eslint.config.mjs            # Configurações ESLint
└── 📄 README.md                    # Documentação do projeto
```

### Descrição dos Diretórios

| Diretório | Descrição |
|-----------|-----------|
| `src/app/` | Páginas e rotas da aplicação (Next.js App Router) |
| `src/components/` | Componentes React reutilizáveis |
| `src/styles/` | Arquivos CSS e estilos globais |
| `public/` | Arquivos estáticos (imagens, ícones, etc.) |

---

## 📜 Scripts Disponíveis

### Front-end

```bash
# Rodar em desenvolvimento
npm run dev

# Criar versão de produção
npm run build

# Rodar versão de produção
npm start

# Verificar erros no código
npm run lint
```

### Back-end

```bash
# Rodar em desenvolvimento
npm run dev

# Rodar em produção
npm start
```

---

## 🐛 Problemas Comuns

### ❌ Erro: "Cannot connect to API"

**Sintoma:**
```
Error: connect ECONNREFUSED 127.0.0.1:3000
```

**Causa:** Back-end não está rodando.

**Solução:** 
1. Verifique se o back-end está rodando no Terminal 1
2. Teste com: `curl http://localhost:3000/api/joias`

---

### ❌ Erro: "Port 3000 already in use"

**Sintoma:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Causa:** Outra aplicação está usando a porta 3000.

**Solução:** 

**Opção 1:** Feche a aplicação que está usando a porta

**Opção 2:** Use outra porta
```bash
npm run dev -- -p 3005
```

**Opção 3:** Finalize o processo (Windows)
```bash
netstat -ano | findstr :3000
taskkill /PID <número_do_processo> /F
```

---

### ❌ Erro: MySQL não conecta

**Sintoma:**
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Causa:** MySQL não está rodando ou senha está errada.

**Solução:**

1. **Inicie o MySQL:**
```bash
# Windows
net start MySQL80

# Linux
sudo systemctl start mysql

# Mac
brew services start mysql
```

2. **Verifique a senha no `.env`**

3. **Teste a conexão:**
```bash
mysql -u root -p
```

---

### ❌ Página não carrega

**Solução:**

1. Verifique se back-end está rodando
2. Verifique se front-end está rodando
3. Limpe o cache do navegador (Ctrl + Shift + Delete)
4. Abra o Console do navegador (F12) e veja os erros

---

### ❌ Erro: "Module not found"

**Sintoma:**
```
Error: Cannot find module 'axios'
```

**Causa:** Dependências não foram instaladas.

**Solução:**
```bash
# Remova e reinstale
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 Boas Práticas

### Desenvolvimento

1. **Sempre inicie o back-end primeiro:**
```bash
# Terminal 1
cd projeto_HilaryGrace && npm run dev

# Terminal 2
cd front-hilaryGrace && npm run dev
```

2. **Nunca commite arquivos `.env`**
   - Arquivos `.env` e `.env.local` contêm dados sensíveis
   - Sempre estão listados no `.gitignore`

3. **Use branches para novas funcionalidades:**
```bash
git checkout -b feature/nova-funcionalidade
```

### Segurança

- 🔒 Nunca exponha senhas ou tokens no código
- 🔑 Use variáveis de ambiente para dados sensíveis
- 🚫 Sempre valide inputs do usuário
- 🔐 Use HTTPS em produção

### Performance

- ⚡ Use Server Components quando possível (padrão no Next.js 13+)
- 🖼️ Otimize imagens com `next/image`
- 📦 Implemente code splitting
- 💾 Use cache de dados quando apropriado

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Siga os passos:

1. **Fork o projeto**
2. **Clone seu fork:**
```bash
git clone https://github.com/seu-usuario/front-hilaryGrace.git
```

3. **Crie uma branch:**
```bash
git checkout -b feature/MinhaNovaFeature
```

4. **Commit suas mudanças:**
```bash
git commit -m "feat: adiciona nova funcionalidade X"
```

5. **Push para o GitHub:**
```bash
git push origin feature/MinhaNovaFeature
```

6. **Abra um Pull Request**

### Padrões de Commit

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat:` | Nova funcionalidade | `feat: adiciona busca` |
| `fix:` | Correção de bug | `fix: corrige erro no login` |
| `docs:` | Documentação | `docs: atualiza README` |
| `style:` | Formatação | `style: ajusta indentação` |
| `refactor:` | Refatoração | `refactor: melhora função` |
| `test:` | Testes | `test: adiciona teste` |
| `chore:` | Tarefas gerais | `chore: atualiza deps` |

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

## 👤 Contato

<div align="center">

### Julianeves01

[![GitHub](https://img.shields.io/badge/GitHub-Julianeves01-181717?style=for-the-badge&logo=github)](https://github.com/Julianeves01)

**Repositórios do Projeto:**

[![Front-end](https://img.shields.io/badge/Front--end-front--hilaryGrace-blue?style=for-the-badge&logo=react)](https://github.com/Julianeves01/front-hilaryGrace)
[![Back-end](https://img.shields.io/badge/Back--end-projeto__HilaryGrace-green?style=for-the-badge&logo=node.js)](https://github.com/Julianeves01/projeto_HilaryGrace)

</div>

---

<div align="center">

**⭐ Se este projeto ajudou você, deixe uma estrela no repositório!**

---

**Desenvolvido por [Julianeves01](https://github.com/Julianeves01)**

[⬆ Voltar ao topo](#-hilary-grace---front-end-application)

</div>
