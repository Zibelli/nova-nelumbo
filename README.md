# Nelumbo Marketing

Landing page institucional one-page da Nelumbo Marketing, desenvolvida com HTML, CSS e JavaScript puro, sem dependências de backend ou etapa de build.

## Visão geral

O projeto foi estruturado para funcionar de forma simples e direta:

- abertura local do arquivo `index.html`
- publicação estática no GitHub Pages
- manutenção fácil de conteúdo, imagens e estilos

## Estrutura do projeto

```text
nova-nelumbo/
├── assets/
│   ├── browser.ico
│   ├── carol-portrait.png
│   ├── nelumbo-brand.png
│   └── nelumbo.png
├── index.html
├── style.css
├── script.js
└── README.md
```

## Arquivos principais

- `index.html`: estrutura da página, conteúdo institucional, SEO e links.
- `style.css`: layout, responsividade, paleta visual e ajustes de interface.
- `script.js`: interações da navegação, menu mobile e animações suaves.
- `assets/`: imagens e ícones usados no site.

## Como executar localmente

Como o projeto é estático, basta abrir o arquivo `index.html` no navegador.

Se preferir testar com um servidor local simples, você pode usar qualquer extensão de servidor estático no VS Code ou um servidor HTTP local da sua preferência.

## Como publicar no GitHub Pages

1. Faça push do projeto para um repositório no GitHub.
2. No GitHub, abra o repositório.
3. Vá em `Settings` > `Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch `main`.
6. Escolha a pasta `/ (root)`.
7. Salve as configurações.

Depois disso, o GitHub Pages vai publicar o site automaticamente.

## Personalização rápida

### Textos

Edite diretamente o conteúdo em `index.html`.

### Cores e estilo

Edite as variáveis e regras visuais no topo de `style.css`.

### Imagens

Substitua os arquivos dentro de `assets/`, mantendo os mesmos nomes, ou atualize os caminhos no `index.html`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Vanilla

## Observações

- O projeto não usa framework.
- O projeto não depende de backend.
- Todos os caminhos de arquivos são relativos.
- O site está preparado para uso estático em ambiente local e GitHub Pages.
