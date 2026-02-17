# Burger House Gourmet

Site institucional de uma hamburgueria gourmet fictícia. Layout dark e premium, totalmente responsivo, com hero animado, cardápio filtrável, história, ingredientes, depoimentos em carrossel e seção de contato/reserva.

![Burger House Gourmet](https://img.shields.io/badge/Burger%20House-Gourmet-d4a853?style=for-the-badge)

## Funcionalidades

| Seção | Descrição |
|-------|-----------|
| **Hero** | Seção inicial com slogan "Feito com obsessão, servido com paixão", CTA para o cardápio e animação de entrada |
| **Cardápio** | Listagem de hambúrgueres com foto, nome, descrição e preço. Filtros: Clássicos, Especiais, Veganos, Combos. Cards com hover e badge "Mais Pedido" |
| **Nossa História** | História fictícia desde 2015, foco em ingredientes artesanais e pão brioche. Layout imagem + texto |
| **Ingredientes Premium** | Destaque para carne angus 180g, pão brioche, queijos importados, molhos autorais e vegetais frescos |
| **Depoimentos** | Carrossel com avaliações, avatar, nome, estrelas e comentário. Navegação por setas, dots e auto-play |
| **Contato** | Endereço, horário, telefone, Instagram, mapa decorativo e formulário de reserva/contato |

## Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3** — Variáveis, Grid, Flexbox, animações e media queries
- **JavaScript (vanilla)** — Filtros do cardápio, carrossel, menu mobile, animações
- **Google Fonts** — Cormorant Garamond (títulos), DM Sans (corpo)

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/burger-house-gourmet.git
   cd burger-house-gourmet
   ```

2. Abra o `index.html` no navegador ou use um servidor local:
   ```bash
   npx serve .
   # ou
   python -m http.server 8000
   ```

Não há dependências: o projeto roda apenas com os arquivos estáticos.

## Estrutura do projeto

```
burger-house-gourmet/
├── index.html    # Página única com todas as seções
├── styles.css    # Estilos, tema dark e responsivo
├── script.js     # Interatividade (filtros, carrossel, menu, formulário)
└── README.md     # Este arquivo
```

## Design

- **Tipografia:** títulos em serifada (Cormorant Garamond), corpo em sans-serif (DM Sans)
- **Tema:** fundos escuros (#0f0e0c e #1a1916) com detalhes em dourado (#d4a853)
- **Responsivo:** menu hamburger em mobile, grids adaptáveis em todas as seções
- **Efeitos:** hover com zoom nas imagens do cardápio, transições suaves, header fixo com efeito no scroll

## Licença

Projeto de demonstração. Uso livre para estudo e portfólio.

---

**Burger House Gourmet** — Feito com obsessão, servido com paixão.
