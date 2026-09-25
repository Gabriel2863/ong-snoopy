# ONG Snoopy

Projeto web da ONG Snoopy desenvolvido como aplicação de página única (SPA), com navegação por hash, templates dinâmicos, validação de formulário, persistência em localStorage e organização modular em JavaScript.

## Estrutura

- `html/`: arquivos HTML utilizados como templates/base.
- `css/`: estilos e design system.
- `js/`: entrada da aplicação e módulos JavaScript.
- `imagens/`: recursos visuais.
- `webpack.config.js`: configuração do Webpack.
- `package.json` e `package-lock.json`: dependências e scripts do projeto.

## Funcionalidades

- Navegação entre páginas sem recarregamento completo.
- Renderização dinâmica por templates.
- Validação e máscaras de CPF e telefone.
- Persistência dos cadastros no localStorage.
- Menu responsivo.
- Recursos de acessibilidade e estados de foco.
- Build de produção com Webpack.

## Execução

Instale as dependências com:

```bash
npm install
```

Build de desenvolvimento:

```bash
npm run build
```

Build otimizado para produção:

```bash
npm run build:prod
```
