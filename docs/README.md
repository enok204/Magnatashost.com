# Sistema de Hospedagem de Bots Discord

Este é um sistema completo para hospedar e gerenciar bots Discord. Permite fazer upload de arquivos ZIP contendo código Python, instalar dependências automaticamente e executar os bots 24/7.

## Funcionalidades

- ✅ Upload de arquivos ZIP com código dos bots
- ✅ Extração automática de ZIPs
- ✅ Busca recursiva por `main.py`
- ✅ Instalação automática de dependências (`requirements.txt`)
- ✅ Gerenciamento de processos (start/stop)
- ✅ Logs em tempo real
- ✅ Interface web moderna e responsiva
- ✅ API REST completa
- ✅ Isolamento com Docker

## Como usar

### Desenvolvimento Local

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
node server.js
```

3. Acesse `http://localhost:3001` no navegador

### Produção com Docker

1. Construa e execute com Docker Compose:
```bash
docker-compose up -d
```

## API Endpoints

### Bots
- `GET /api/bots` - Listar todos os bots
- `GET /api/bots/:id` - Obter bot específico
- `POST /api/bots` - Criar novo bot
- `PUT /api/bots/:id` - Atualizar bot
- `DELETE /api/bots/:id` - Deletar bot

### Controle de Bots
- `POST /api/bots/:id/start` - Iniciar bot
- `POST /api/bots/:id/stop` - Parar bot

### Upload
- `POST /api/upload` - Upload de arquivo ZIP

## Estrutura do Projeto

```
├── server.js          # Servidor backend Node.js
├── api.js            # Cliente API para o frontend
├── Dockerfile        # Configuração Docker
├── docker-compose.yml # Orquestração Docker
├── package.json      # Dependências Node.js
├── layout.js         # Layout do frontend (React)
├── componentes/      # Componentes React
│   └── bot/
│       ├── botcard.txt
│       ├── enblemasdestatus.txt
│       └── logs.txt
├── entidades/
│   └── bot.txt       # Esquema do bot
└── paginas/          # Páginas React
    ├── criarbot
    ├── detalherdobot.txt
    └── painel
```

## Requisitos do Bot

Para que um bot funcione corretamente, o arquivo ZIP deve conter:

1. **main.py** - Arquivo principal do bot
2. **requirements.txt** (opcional) - Dependências Python
3. **token.txt** - Será criado automaticamente com o token fornecido

### Exemplo de estrutura ZIP:
```
meu-bot/
├── main.py
├── requirements.txt (opcional)
└── outros_arquivos.py
```

### Exemplo main.py:
```python
import discord
from discord.ext import commands
import os

# Lê o token do arquivo
with open('token.txt', 'r') as f:
    TOKEN = f.read().strip()

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(f'Bot conectado como {bot.user}')

@bot.command()
async def ping(ctx):
    await ctx.send('Pong!')

bot.run(TOKEN)
```

## Segurança

- Tokens são armazenados de forma segura
- Processos são isolados por bot
- Logs são capturados em tempo real
- Sistema de limpeza automática de arquivos

## Suporte

Para dúvidas ou problemas, verifique os logs do bot na interface web ou os logs do servidor no terminal.