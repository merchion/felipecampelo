# Blog Pessoal: felipecampelo.dev

## Visão Geral do Projeto

Este projeto é o meu blog pessoal, criado com o objetivo de compartilhar conhecimentos sobre programação, data science, inteligência artificial e outros tópicos de interesse. O blog contará com artigos detalhados, uma página dedicada ao meu portfólio, uma seção sobre mim e um meio de contato.

## Stack de Tecnologia

O blog será desenvolvido utilizando uma série de tecnologias modernas e práticas de desenvolvimento. Aqui está a stack planejada:

- **Frontend**: React com Vite
- **Estilização**: Bootstrap 5
- **Containerização**: Docker
- **Testes**: Jest
- **CMS**: Directus CMS (Self-Hosted)
- **Error Tracking**: Sentry
- **Hospedagem**: A definir (Possivelmente Vercel)
- **CI/CD**: GitHub Actions
- **Cliente HTTP**: Axios

## Roadmap de Desenvolvimento

1. **Configuração do Ambiente de Desenvolvimento**:
   - Configurar o ambiente local para desenvolvimento usando React e Vite.
   - Preparar o Dockerfile e docker-compose para o ambiente de desenvolvimento.
   - O React será feito usando Typescript e o SWC será o compilador do Typescript devido sua simplicidade de configuração e velocidade

2. **Estruturação do Projeto**:
   - Criar a estrutura de diretórios do projeto (`frontend` para React e `cms` para Directus).

3. **Configuração do CMS**:
   - Instalar e configurar o Directus CMS de forma self-hosted.
   - Definir modelos de dados para artigos, portfólio, etc.

4. **Desenvolvimento do Frontend**:
   - Implementar páginas e componentes usando React.
   - Integrar Bootstrap 5 para a interface do usuário.

5. **Integração com o CMS**:
   - Utilizar Axios para fazer requisições à API Rest do Directus.
   - Implementar funcionalidades de criação, leitura, atualização e exclusão (CRUD) para os artigos.

6. **Testes**:
   - Escrever testes usando Jest.
   - Configurar execução de testes no ambiente de CI/CD.

7. **Monitoramento e Rastreamento de Erros**:
   - Integrar o Sentry para rastreamento de erros em tempo real.

8. **CI/CD**:
   - Configurar GitHub Actions para integração e entrega contínua.
   - Automatizar testes, builds, e deployment.

9. **Hospedagem**:
   - Escolher um provedor de hospedagem compatível com containers Docker.
   - Configurar o ambiente de produção e realizar o deployment do blog.

10. **Manutenção e Iterações Futuras**:
    - Monitorar o desempenho do aplicativo e fazer ajustes conforme necessário.
    - Planejar e implementar novas funcionalidades.

## Objetivos

Este projeto representa uma oportunidade de compartilhar conhecimentos e demonstrar competências em diversas tecnologias e práticas de desenvolvimento modernas.