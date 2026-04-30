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
│   ├── fonts/
│   │   ├── cormorant-garamond-latin.woff2
│   │   ├── cormorant-garamond-latin-ext.woff2
│   │   ├── manrope-latin.woff2
│   │   ├── manrope-latin-ext.woff2
│   │   └── OFL.txt
│   ├── browser.ico
│   ├── carol-portrait.png
│   ├── nelumbo-brand.png
│   └── nelumbo.png
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── CNAME
└── README.md
```

## Arquivos principais

- `index.html`: estrutura da página, conteúdo institucional, SEO e links.
- `style.css`: layout, responsividade, paleta visual e ajustes de interface.
- `script.js`: interações da navegação, menu mobile e animações suaves.
- `assets/`: imagens, ícones e fontes auto-hospedadas usados no site.
- `robots.txt`: diretivas para crawlers de mecanismos de busca.
- `sitemap.xml`: mapa do site para indexação por buscadores.
- `CNAME`: configuração de domínio personalizado no GitHub Pages.

## Como executar localmente

Como o projeto é estático, basta abrir o arquivo `index.html` no navegador.

Se preferir testar com um servidor local simples, você pode usar qualquer extensão de servidor estático no VS Code ou um servidor HTTP local da sua preferência.

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
- Fontes auto-hospedadas: Cormorant Garamond e Manrope (formato woff2, licença OFL)

## Observações

- O projeto não usa framework.
- O projeto não depende de backend.
- Todos os caminhos de arquivos são relativos.
- As fontes são servidas localmente em `assets/fonts/`, sem dependência do Google Fonts.
- O site está publicado em [nelumbomarketing.com.br](https://nelumbomarketing.com.br/) via GitHub Pages com domínio personalizado.
- O domínio personalizado é configurado pelo arquivo `CNAME`.
