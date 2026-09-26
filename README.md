# Saúde em Linhas

**Tema: Carta Anônima — Saúde Mental no Trabalho**

Projeto Integrador desenvolvido no Senac, com orientação de Prof. Ramiro Junior e Profa. Dulce.

O **Saúde em Linhas** é uma aplicação web em que a pessoa escreve, de forma anônima, um relato sobre como está se sentindo no trabalho e recebe de volta uma **carta de apoio** gerada por Inteligência Artificial, acompanhada de sugestões de músicas, livros e links de ajuda. Cada relato também recebe um **nível de urgência**, para que situações de crise sejam destacadas com recursos de apoio imediato.

---

## Funcionalidades

- **Relato anônimo** — nenhum dado pessoal é solicitado; o texto é limitado a 2.000 caracteres.
- **Carta de apoio personalizada** — resposta empática, no formato de uma carta, gerada por IA.
- **Identificação da emoção predominante** — com categoria (`crise`, `burnout`, `ansiedade`, `estresse`, `tristeza`, `geral`) e nível de risco (`baixo`, `medio`, `alto`).
- **Nível de urgência (1 a 3)**
  - `1` normal — relato cotidiano, sem sinais de crise
  - `2` médio — sofrimento moderado, estresse elevado, isolamento
  - `3` urgente — sinais de crise aguda; a interface destaca canais de ajuda (como o CVV)
- **Recomendações** — músicas, livros e links de apoio relacionados ao relato.
- **Registro no banco de dados** — relatos e emoções identificadas são armazenados para análise, sem identificar o autor.

> A IA é instruída a **nunca fazer diagnósticos clínicos** e a não usar nomes pessoais. O sistema é um apoio emocional e não substitui acompanhamento profissional.

---

## Ferramentas utilizadas

### Back-end
| Ferramenta | Uso |
|---|---|
| **Node.js** | Ambiente de execução JavaScript no servidor |
| **Express** | Framework web — rotas, API e arquivos estáticos |
| **PostgreSQL** | Banco de dados relacional |
| **pg** | Driver de conexão do Node.js com o PostgreSQL |
| **dotenv** | Carregamento das variáveis de ambiente (`.env`) |

### Inteligência Artificial
| Ferramenta | Uso |
|---|---|
| **API de LLM compatível com OpenAI / OpenRouter** | Análise do relato e geração da carta e das recomendações. Provedor, chave e modelo são configuráveis via `.env` |
| **Prompt de sistema** | Define o papel de assistente de apoio emocional e obriga a resposta em JSON estruturado |

### Front-end
| Ferramenta | Uso |
|---|---|
| **EJS** | Template engine para renderizar as páginas no servidor |
| **HTML, CSS e JavaScript puro** | Interface e interação, sem frameworks |
| **Google Fonts** | Tipografia — Nunito, Lora, Special Elite e Courier Prime (estilo de carta/máquina de escrever) |
| **Lucide** | Biblioteca de ícones |

### Desenvolvimento
| Ferramenta | Uso |
|---|---|
| **npm** | Gerenciamento de dependências e scripts |
| **nodemon** | Reinício automático do servidor durante o desenvolvimento |
| **Git / GitHub** | Versionamento do código |

---

## Estrutura do projeto

```
saude_em_linhas/
├── app.js                        # Configuração do Express, middlewares e rotas
├── bin/www.js                    # Inicialização do servidor HTTP
├── controllers/
│   ├── controller.ai.js          # Integração com a API de IA (prompt + tratamento da resposta)
│   └── controller.report.js      # Recebe o relato, salva no banco e retorna a análise
├── services/
│   └── service.db.js             # Pool de conexão com o PostgreSQL
├── routes/index.js               # Rotas GET (página inicial e /api)
├── views/                        # Templates EJS (index e erro)
├── public/
│   ├── javascripts/main.js       # Lógica da interface (envio do relato, exibição da carta)
│   └── stylesheets/              # Estilos
└── .env.exemple                  # Modelo das variáveis de ambiente
```

---

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/` | Página principal |
| `GET` | `/api` | Informações básicas da API |
| `POST` | `/relato` | Envia um relato (`{ "conteudo": "..." }`) e retorna carta, emoção, urgência e recomendações |

Exemplo de resposta do `POST /relato`:

```json
{
  "conselho": "Olá, ...",
  "nivel_urgencia": 1,
  "emocao": { "nome_emocao": "cansaço", "categoria": "burnout", "nivel_risco": "medio" },
  "musicas": [{ "titulo": "...", "artista": "...", "url": "..." }],
  "livros":  [{ "titulo": "...", "autor": "...", "descricao": "..." }],
  "links":   [{ "titulo": "...", "descricao": "...", "url": "..." }]
}
```

---

## Banco de dados

A aplicação utiliza duas tabelas no PostgreSQL:

- **REGISTROS** — `ID_RELATO`, `CONTEUDO`, `ANALISE`, `NIVEL_URGENCIA`
- **EMOCAO** — `ID_EMOCAO`, `NOME_EMOCAO`, `CATEGORIA`, `NIVEL_RISCO`

Exemplo de criação:

```sql
CREATE TABLE REGISTROS (
  ID_RELATO      SERIAL PRIMARY KEY,
  CONTEUDO       TEXT NOT NULL,
  ANALISE        VARCHAR(100),
  NIVEL_URGENCIA INT
);

CREATE TABLE EMOCAO (
  ID_EMOCAO   SERIAL PRIMARY KEY,
  NOME_EMOCAO VARCHAR(100) NOT NULL,
  CATEGORIA   VARCHAR(20),
  NIVEL_RISCO VARCHAR(10)
);
```

---

## Como executar

**Pré-requisitos:** Node.js, um banco PostgreSQL e uma chave de API de um provedor de IA compatível com OpenAI.

1. Clone o repositório e instale as dependências:

   ```bash
   git clone git@github.com:Carlos-iso/saude_em_linhas.git
   cd saude_em_linhas
   npm install
   ```

2. Copie `.env.exemple` para `.env` e preencha:

   ```env
   DATABASE_URL=postgresql://usuario:senha@host:5432/banco
   IA_API_URL=https://...        # endpoint de chat completions
   IA_API_KEY=sk-...
   IA_MODEL=nome-do-modelo
   PORT=3000
   NODE_ENV=development
   ```

3. Crie as tabelas no banco (ver seção **Banco de dados**).

4. Inicie o servidor:

   ```bash
   npm run dev     # desenvolvimento (nodemon)
   npm start       # produção
   ```

5. Acesse `http://localhost:3000`.

---

## Aviso

O Saúde em Linhas é um projeto acadêmico de apoio emocional e **não substitui atendimento psicológico ou médico**. Em caso de crise, procure ajuda: **CVV — ligue 188** (24h, gratuito) ou acesse [cvv.org.br](https://cvv.org.br).
