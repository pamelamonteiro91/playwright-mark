
🎯 Projeto: playwright-mark

Automação de testes end-to-end com Playwright e TypeScript, simulando interações reais de usuários em aplicações web.
Este projeto foi desenvolvido com foco em boas práticas de automação, estrutura modular e escalabilidade, ideal para ambientes de QA e desenvolvimento ágil.

🚀 Tecnologias Utilizadas
Frameworks e Ferramentas:
- Playwright – Automação moderna de testes
- TypeScript – Tipagem estática para JavaScript
- Node.js – Ambiente de execução
- Yarn – Gerenciador de pacotes
- Insomnia – Testes de API (Insomnia_markL.json incluído)
- GitHub Actions – Integração contínua

---

## ⚙️ Instalação e Execução

1. Clone o repositório
   
git clone https://github.com/pamelamonteiro91/playwright-mark.git
cd playwright-mark

2. Instale as dependências
    
yarn install

3. Configure o ambiente
   
Crie um arquivo .env com:

BASE_URL=http://localhost:8080

BASE_API=http://localhost:3333

4. Execute os testes

⚙️ Pré-requisitos para execução dos testes

Antes de rodar os testes E2E com Playwright, é necessário iniciar os serviços da aplicação:

### 1️⃣ Iniciar a API

```bash
cd /c/QAx/playwright-mark/apps/api/
yarn dev

2️⃣ Iniciar a interface Web

Em uma nova aba do terminal:
cd /c/QAx/playwright-mark/apps/web/
yarn dev

Após isso, os testes podem ser executados normalmente com:
npx playwright test


npx playwright test

🔄 Integração Contínua
Este projeto utiliza GitHub Actions para executar testes automaticamente em cada push ou pull request nas branches main e master. 

O workflow está definido em:

.github/workflows/playwright.yml

🌐 Deploy com GitHub Pages (opcional)
Você pode publicar o relatório HTML gerado pelo Playwright usando GitHub Pages:
1. Gere o relatório localmente

npx playwright test --reporter=html

2. Acesse o diretório do relatório

cd playwright-report

3. Crie uma branch gh-pages e envie o conteúdo

git checkout --orphan gh-pages
git add .
git commit -m "Deploy relatório HTML"
git push origin gh-pages

4. Ative o GitHub Pages

- Vá até Settings > Pages
- Selecione a branch gh-pages como fonte
- Salve e acesse o link gerado

📌 Funcionalidades
- ✅ Testes automatizados com Playwright
- ✅ Execução em múltiplos navegadores e dispositivos
- ✅ Relatórios HTML gerados automaticamente
- ✅ Integração contínua com GitHub Actions
- ✅ Deploy opcional com GitHub Pages

👩‍💻 
Pamela Monteiro

Qualidade de software e automação de testes.

🔗 LinkedIn: https://www.linkedin.com/in/p%C3%A2mela-umbuzeiro-monteiro-souza/

























