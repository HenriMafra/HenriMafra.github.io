/* ============================================================
   Conteúdo do portfólio — foco freelance.
   Apenas fatos reais e públicos. Sem métricas inventadas.
   ============================================================ */

export const profile = {
  name: 'Henri Mafra',
  role: 'Estudante de Ciência de Dados e Machine Learning',
  location: 'Brasília, DF',
  email: 'helberthsys@gmail.com',
  whatsapp: '5561982305184',
  whatsappLabel: '+55 61 98230-5184',
  linkedin: 'https://www.linkedin.com/in/henrimafra',
  github: 'https://github.com/HenriMafra',
}

export const whatsappLink = (
  message = 'Olá, Henri! Vi seu portfólio e gostaria de conversar sobre um projeto.',
) => `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`

export const seo = {
  title: 'Henri Mafra — Ciência de Dados, Machine Learning e Desenvolvimento',
  description:
    'Henri Mafra, estudante de Ciência de Dados e Machine Learning. Faço dashboards, automações, modelos e sites — soluções práticas de dados e web para o seu negócio, com desenvolvimento orientado por IA.',
}

export const hero = {
  badge: 'disponível para projetos',
  name: 'Henri Mafra',
  headline: 'Dados, automação e sites que ajudam o seu negócio a crescer.',
  subheadline:
    'Estudante de Ciência de Dados e Machine Learning. Transformo dados em dashboards, automatizo tarefas repetitivas e crio sites modernos — com desenvolvimento orientado por IA, do dado bruto ao produto no ar.',
  terminalLines: [
    { cmd: 'henri@portfolio:~$ whoami', out: 'estudante de ciência de dados e machine learning' },
    { cmd: 'henri@portfolio:~$ services', out: 'dashboards · automação · machine learning · sites' },
    { cmd: 'henri@portfolio:~$ stack', out: 'python · sql · javascript/typescript · react · ia' },
  ],
  metrics: [
    { value: 'CD & ML', label: 'Estudante · UniCEUB' },
    { value: '2025–2028', label: 'Graduação em andamento' },
    { value: 'Freelance', label: 'aberto a projetos' },
    { value: '13+', label: 'ferramentas de IA no fluxo', countTo: 13, suffix: '+' },
  ],
}

export const about = {
  heading: 'Sobre mim',
  paragraphs: [
    'Sou estudante de Ciência de Dados e Machine Learning na UniCEUB (Brasília) e, nas horas livres, ajudo pessoas e pequenos negócios a organizar dados, automatizar tarefas repetitivas e ganhar presença online.',
    'Trabalho com transparência, prazos claros e foco em resultado prático para o seu dia a dia. Uso desenvolvimento orientado por IA como ferramenta central — o que me deixa rápido para tirar uma ideia do papel e entregar algo que realmente funciona.',
    'Gosto de problemas onde dado, automação e web se encontram — e prezo por honestidade técnica: digo o que dá pra fazer, em quanto tempo, e entrego.',
  ],
  spec: [
    { k: 'Formação', v: 'Ciência de Dados e ML · UniCEUB' },
    { k: 'Período', v: 'fev/2025 – jun/2028' },
    { k: 'Local', v: 'Brasília, DF · Brasil' },
    { k: 'Foco', v: 'Dados · Automação · Web · IA' },
    { k: 'Modelo', v: 'Freelance · projetos sob demanda' },
    { k: 'Idiomas', v: 'Português (nativo) · Inglês técnico' },
  ],
}

export const services = [
  {
    title: 'Dashboards & BI',
    icon: 'chart',
    description:
      'Painéis interativos para acompanhar vendas, finanças e indicadores do seu negócio em tempo real.',
  },
  {
    title: 'Automação de processos',
    icon: 'gear',
    description:
      'Relatórios e tarefas repetitivas feitos automaticamente — menos trabalho manual, menos erro.',
  },
  {
    title: 'Machine Learning',
    icon: 'brain',
    description:
      'Modelos de previsão e classificação para apoiar decisões com base em dados, não em achismo.',
  },
  {
    title: 'Sites & Landing Pages',
    icon: 'globe',
    description:
      'Páginas rápidas, modernas e responsivas para apresentar o seu negócio e atrair clientes.',
  },
]

/* Ferramentas de IA que uso no fluxo de trabalho. */
export const aiTools = {
  intro:
    'Desenvolvimento orientado por IA é o centro do meu fluxo. Combino assistentes, agentes de código e construtores de apps para entregar mais rápido e com mais qualidade.',
  groups: [
    { group: 'Assistentes de IA', items: ['Claude', 'ChatGPT', 'Gemini', 'Grok', 'Perplexity', 'GLM'] },
    { group: 'Desenvolvimento com IA', items: ['Claude Code', 'Codex', 'Antigravity', 'Blackbox', 'Cowork'] },
    { group: 'Construção de apps com IA', items: ['Base44', 'Lovable'] },
    { group: 'Modelos locais', items: ['Ollama'] },
  ],
  note: 'entre outras — o ecossistema muda rápido e eu acompanho.',
}

export const skills = [
  { group: 'Linguagens', items: ['Python', 'SQL', 'JavaScript', 'TypeScript'] },
  { group: 'Dados & BI', items: ['Modelagem dimensional', 'ETL', 'Power BI', 'DAX', 'Pandas', 'Streamlit'] },
  { group: 'Web & Cloud', items: ['React', 'Vite', 'Node.js', 'Cloudflare', 'Supabase/PostgreSQL'] },
  { group: 'Automação', items: ['Playwright', 'Scraping', 'Integração de APIs', 'Git', 'GitHub Actions'] },
]

export const roadmap = {
  group: 'Em desenvolvimento / Roadmap',
  items: ['Arquiteturas de agentes', 'RAG', 'Bancos vetoriais (pgvector, Qdrant)', 'Observabilidade de IA'],
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
  { label: 'LinkedIn', handle: 'in/henrimafra', url: 'https://www.linkedin.com/in/henrimafra', icon: 'linkedin' },
  { label: 'Hugging Face', handle: 'HENRI10', url: 'https://huggingface.co/HENRI10', icon: 'hf' },
  { label: 'Kaggle', handle: 'henrimafra', url: 'https://www.kaggle.com/henrimafra', icon: 'kaggle' },
  { label: 'LeetCode', handle: 'Henri1', url: 'https://leetcode.com/u/Henri1/', icon: 'leetcode' },
  { label: 'HackerRank', handle: 'henri_afly', url: 'https://www.hackerrank.com/profile/henri_afly', icon: 'hackerrank' },
]

export const contact = {
  heading: 'Vamos tirar o seu projeto do papel?',
  subheading:
    'Precisa de um dashboard, uma automação, um modelo de Machine Learning ou um site? Me chame no WhatsApp ou por e-mail e eu retorno rapidinho com uma proposta sem compromisso.',
}

export const footerText = 'Estudante de Ciência de Dados e Machine Learning · Brasília, DF'

export const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#ia', label: 'IA' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
]
