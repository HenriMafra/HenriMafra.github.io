/* ============================================================
   Conteúdo do portfólio — foco freelance, linguagem acessível.
   Apenas fatos reais e públicos. Sem citar instituição de ensino.
   ============================================================ */

export const profile = {
  name: 'Henri Mafra',
  role: 'Estudante de Ciência de Dados e Machine Learning',
  location: 'Brasília, DF',
  email: 'helberthsys@gmail.com',
  whatsapp: '5561982305184',
  whatsappLabel: '+55 61 98230-5184',
  github: 'https://github.com/HenriMafra',
}

export const whatsappLink = (
  message = 'Olá, Henri! Vi seu portfólio e gostaria de conversar sobre um projeto.',
) => `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`

export const seo = {
  title: 'Henri Mafra — Ciência de Dados, Machine Learning e Desenvolvimento',
  description:
    'Henri Mafra, estudante de Ciência de Dados e Machine Learning. Faço dashboards, automações, modelos e landing pages — soluções práticas de dados e web para o seu negócio, com desenvolvimento orientado por IA.',
}

export const hero = {
  badge: 'disponível para projetos',
  name: 'Henri Mafra',
  headline: 'Dados, automação e sites que ajudam o seu negócio a crescer.',
  subheadline:
    'Estudante de Ciência de Dados e Machine Learning. Transformo dados em dashboards, automatizo tarefas repetitivas e crio landing pages modernas — com as ferramentas de IA mais avançadas do mundo, do dado bruto ao produto no ar.',
  terminalLines: [
    { cmd: 'henri@portfolio:~$ whoami', out: 'estudante de ciência de dados e machine learning' },
    { cmd: 'henri@portfolio:~$ services', out: 'dashboards · automação · machine learning · sites' },
    { cmd: 'henri@portfolio:~$ stack', out: 'python · sql · javascript/typescript · react · ia' },
  ],
  metrics: [
    { value: 'CD & ML', label: 'Ciência de Dados e Machine Learning' },
    { value: '30+', label: 'ferramentas de IA no fluxo', countTo: 30, suffix: '+' },
    { value: 'Freelance', label: 'aberto a projetos' },
    { value: '24/7', label: 'projetos em VPS, sempre no ar' },
  ],
}

export const about = {
  heading: 'Sobre mim',
  paragraphs: [
    'Sou estudante de Ciência de Dados e Machine Learning e, no dia a dia, ajudo pessoas e pequenos negócios a organizar dados, automatizar tarefas repetitivas e ganhar presença online com landing pages bonitas e rápidas.',
    'Em vez de explicar termos técnicos, eu resolvo o seu problema: você me diz o que precisa, eu cuido da parte difícil e te entrego algo simples de usar. Trabalho com transparência, prazos claros e foco em resultado prático.',
    'Uso as ferramentas de IA mais avançadas do mundo como aliadas — o que me deixa rápido para tirar uma ideia do papel e entregar algo que realmente funciona, com cuidado de segurança em tudo que construo.',
  ],
  spec: [
    { k: 'Área', v: 'Ciência de Dados e Machine Learning' },
    { k: 'Foco', v: 'Dados · Automação · Landing pages' },
    { k: 'Local', v: 'Brasília, DF · Brasil' },
    { k: 'Modelo', v: 'Freelance · projetos sob demanda' },
    { k: 'Disponibilidade', v: 'Projetos em VPS 24/7' },
    { k: 'Idiomas', v: 'Português (nativo) · Inglês avançado' },
  ],
}

export const services = [
  {
    title: 'Dashboards & BI',
    icon: 'chart',
    description:
      'Painéis visuais e fáceis de ler para acompanhar vendas, finanças e os números do seu negócio em tempo real.',
  },
  {
    title: 'Automação de tarefas',
    icon: 'gear',
    description:
      'Aquela tarefa chata e repetitiva passa a acontecer sozinha — você ganha tempo e evita erros manuais.',
  },
  {
    title: 'Machine Learning',
    icon: 'brain',
    description:
      'Previsões e recomendações a partir dos seus dados, para você decidir com base em fatos, não em achismo.',
  },
  {
    title: 'Landing pages & sites',
    icon: 'globe',
    description:
      'Páginas rápidas, modernas e responsivas para apresentar o seu negócio e transformar visitantes em clientes.',
  },
]

/* Ferramentas de IA que uso no fluxo de trabalho. Em linguagem simples:
   são os "assistentes" mais avançados do mundo, que me deixam mais rápido e melhor. */
export const aiTools = {
  intro:
    'O que faz a diferença na minha entrega: uso, de forma combinada, as melhores ferramentas de inteligência artificial do mundo — para escrever código, criar imagens, pesquisar e acelerar tudo. Você não precisa entender nenhuma delas; o resultado chega pronto.',
  groups: [
    { group: 'Assistentes de IA', items: ['Claude', 'ChatGPT', 'Gemini', 'Grok', 'DeepSeek', 'Perplexity', 'Copilot', 'Meta AI', 'Le Chat', 'GLM', 'Qwen'] },
    { group: 'Pesquisa & conhecimento', items: ['NotebookLM', 'Claude Projects', 'Gemini Deep Research'] },
    { group: 'Desenvolvimento com IA', items: ['Claude Code', 'Codex', 'Cursor', 'GitHub Copilot', 'Antigravity', 'Windsurf', 'Blackbox', 'Cowork'] },
    { group: 'Criação de apps & sites com IA', items: ['Base44', 'Lovable', 'v0', 'Bolt', 'Firebase Studio'] },
    { group: 'Geração de imagem', items: ['Midjourney', 'DALL·E', 'Stable Diffusion', 'Flux', 'Leonardo AI', 'Ideogram', 'Adobe Firefly', 'Imagen / Whisk', 'Recraft'] },
    { group: 'Vídeo, áudio & mídia', items: ['Sora', 'Runway', 'Kling', 'Veo', 'Pika', 'Suno', 'ElevenLabs'] },
    { group: 'Modelos locais (no meu hardware)', items: ['Ollama', 'LM Studio', 'Jan'] },
  ],
  note: 'entre muitas outras — o ecossistema de IA muda toda semana e eu acompanho de perto.',
}

export const skills = [
  { group: 'Linguagens', items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { group: 'Dados & BI', items: ['Modelagem dimensional', 'ETL', 'Power BI', 'DAX', 'Pandas', 'Streamlit'] },
  { group: 'Web & Cloud', items: ['React', 'Vite', 'Node.js', 'Tailwind', 'Cloudflare', 'Firebase', 'Supabase/PostgreSQL'] },
  { group: 'Infra & Deploy', items: ['GitHub Actions', 'VPS 24/7', 'Cloudflare Pages/Workers', 'Git'] },
  { group: 'Automação', items: ['Playwright', 'Scraping', 'Integração de APIs', 'Webhooks'] },
]

export const roadmap = {
  group: 'Em desenvolvimento / Roadmap',
  items: ['Visão computacional', 'Arquiteturas de agentes', 'RAG', 'Bancos vetoriais (pgvector, Qdrant)', 'Observabilidade de IA'],
}

/* status: deploy (ao vivo) | producao | open | academico | soon */
export const projects = [
  {
    title: 'Double V Wine',
    tag: 'React · TypeScript',
    category: 'web',
    status: 'deploy',
    collab: 'em parceria com Gabriel Mafra',
    description:
      'Landing page institucional moderna e responsiva para a marca de vinhos Double V Wine. Um site rápido, elegante e construído para converter — feito em dupla.',
    stack: ['React', 'TypeScript', 'Vite'],
    highlights: [
      'Design moderno e totalmente responsivo',
      'No ar em doublevwine.com.br',
      'Projeto desenvolvido em parceria',
    ],
    links: [{ label: 'Ver ao vivo', url: 'https://doublevwine.com.br/', primary: true }],
  },
  {
    title: 'Novos projetos em breve',
    tag: 'em construção',
    category: 'soon',
    status: 'soon',
    description:
      'Estou desenvolvendo novos projetos de dados, automação e web que aparecerão aqui em breve. Quer que o seu seja o próximo?',
    stack: ['Dados', 'Automação', 'Web'],
  },
]

export const process = [
  { step: '1', title: 'Contato', description: 'Você me conta o que precisa pelo WhatsApp ou e-mail, sem compromisso.' },
  { step: '2', title: 'Entendimento', description: 'Conversamos sobre o seu objetivo e definimos juntos a solução e o prazo.' },
  { step: '3', title: 'Desenvolvimento', description: 'Eu desenvolvo a solução e compartilho o progresso com você ao longo do caminho.' },
  { step: '4', title: 'Entrega', description: 'Você recebe tudo pronto, com uma explicação simples de como usar.' },
]

export const links = [
  { label: 'GitHub', handle: 'HenriMafra', url: 'https://github.com/HenriMafra', icon: 'github' },
  { label: 'Hugging Face', handle: 'HENRI10', url: 'https://huggingface.co/HENRI10', icon: 'hf' },
  { label: 'Kaggle', handle: 'henrimafra', url: 'https://www.kaggle.com/henrimafra', icon: 'kaggle' },
  { label: 'LeetCode', handle: 'Henri1', url: 'https://leetcode.com/u/Henri1/', icon: 'leetcode' },
  { label: 'HackerRank', handle: 'henri_afly', url: 'https://www.hackerrank.com/profile/henri_afly', icon: 'hackerrank' },
]

export const contact = {
  heading: 'Vamos tirar o seu projeto do papel?',
  subheading:
    'Precisa de um dashboard, uma automação ou uma landing page? Me chame no WhatsApp ou por e-mail e eu retorno rapidinho com uma proposta sem compromisso. Quer ver antes como ficaria? Peça uma prévia (MVP).',
}

export const footerText = 'Estudante de Ciência de Dados e Machine Learning · Brasília, DF'

export const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#ia', label: 'IA' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#mvp', label: 'Peça um MVP' },
  { href: '#contato', label: 'Contato' },
]
