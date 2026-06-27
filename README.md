# Henri Mafra — Portfólio

Portfólio de carreira em **Ciência de Dados, Machine Learning e automação orientada por IA**.
Conceito *Orchestrator Console*: um console técnico dark-first onde o próprio site é a prova do trabalho — uma espinha de pipeline (coleta → transformação → modelagem → entrega) que mapeia projetos reais.

🔗 **Ao vivo:** [henrimafra.github.io](https://henrimafra.github.io/)
🎮 **Easter egg:** pressione **P** (ou acesse [/game](https://henrimafra.github.io/game/)) para jogar Neon Snake.

## Stack

- **React 19** + **Vite** — SPA componentizada
- **Tailwind CSS 4** — design system com tokens semânticos e tema claro/escuro
- **GitHub Actions** — build e deploy automáticos no GitHub Pages

Sem dependências de UI externas: ícones, animações e o terminal do hero são feitos à mão, com `prefers-reduced-motion` respeitado em todas as animações.

## Desenvolvimento

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build
```

## Estrutura

```
src/
  components/   # Topbar, Hero, Pipeline, Projects, ...
  siteData.js   # todo o conteúdo (perfil, projetos, skills)
  hooks.js      # reveal, count-up, tema, relógio
  index.css     # design system (tokens + animações)
public/
  game/         # Neon Snake (HTML5 Canvas)
  Henri_Mafra_Curriculo.pdf
```

## Contato

- E-mail: henri.afly@gmail.com
- LinkedIn: [in/henrimafra](https://www.linkedin.com/in/henrimafra)
- WhatsApp: [+55 61 98230-5184](https://wa.me/5561982305184)
