/* ============================================================
   Conteúdo do portfólio. Apenas fatos reais — sem métricas inventadas.
   ============================================================ */

export const profile = {
  name: 'Henri Mafra',
  role: 'Ciência de Dados · Machine Learning · Automação orientada por IA',
  location: 'Brasília, DF',
  email: 'henri.afly@gmail.com',
  whatsapp: '5561982305184',
  whatsappLabel: '+55 61 98230-5184',
  linkedin: 'https://www.linkedin.com/in/henrimafra',
  github: 'https://github.com/HenriMafra',
  cv: '/Henri_Mafra_Curriculo.pdf',
}

export const whatsappLink = (
  message = 'Olá, Henri! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
) => `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`

export const seo = {
  title: 'Henri Mafra — Ciência de Dados, Machine Learning e Automação com IA',
  description:
    'Henri Mafra, estudante de Ciência de Dados (UniCEUB) e estagiário de TI na NTSEC. Construo pipelines de dados, automações com IA (Claude Code, LLMs) e dashboards ao vivo — da coleta ao deploy.',
}

export const hero = {
  badge: 'disponível para oportunidades',
  name: 'Henri Mafra',
  headline: 'Projeto e construo sistemas de dados de ponta a ponta — da coleta ao deploy.',
  subheadline:
    'Ciência de Dados · Machine Learning · Automação orientada por IA. Estudante de CD na UniCEUB e estagiário de TI na NTSEC, onde transformo processos manuais em pipelines e ferramentas que rodam em produção.',
  terminalLines: [
    { cmd: 'henri@ntsec:~$ whoami', out: 'henri_mafra · cientista de dados em formação' },
    { cmd: 'henri@ntsec:~$ stack --core', out: 'python · sql · javascript/typescript · react · cloudflare' },
    { cmd: 'henri@ntsec:~$ focus', out: 'pipelines de dados · automação · IA aplicada (Claude Code, LLMs)' },
  ],
  metrics: [
    { value: '2025–2028', label: 'Ciência de Dados @ UniCEUB' },
    { value: 'NTSEC', label: 'Estagiário de TI · desde 2026' },
    { value: '13', label: 'projetos reais', countTo: 13, suffix: '' },
    { value: '5', label: 'ferramentas em produção', countTo: 5, suffix: '' },
  ],
}

export const pipeline = {
  intro:
    'Não trabalho com etapas soltas — penso o ciclo de vida inteiro do dado. Cada estágio abaixo é um projeto real que construí.',
  stages: [
    {
      key: 'coleta',
      label: 'Coleta',
      icon: 'download',
      desc: 'Capturo dados de fontes públicas e privadas.',
      projects: ['RADAR B2G · API do PNCP', 'Sistema JJK · scraping'],
    },
    {
      key: 'transformacao',
      label: 'Transformação',
      icon: 'shuffle',
      desc: 'Limpo, estruturo e automatizo o tratamento.',
      projects: ['JJK · Playwright/RPA', 'ETL · esquema estrela'],
    },
    {
      key: 'modelo',
      label: 'Modelagem',
      icon: 'brain',
      desc: 'Modelo dados e aplico Machine Learning.',
      projects: ['Data Warehouse', 'Coffee Shop Sales · ML'],
    },
    {
      key: 'deploy',
      label: 'Entrega',
      icon: 'rocket',
      desc: 'Entrego em produção: apps, portais e dashboards.',
      projects: ['Mapper · Cloudflare', 'Dashboards ao vivo'],
    },
  ],
}

export const about = {
  heading: 'Perfil técnico',
  paragraphs: [
    'Sou estudante de Ciência de Dados na UniCEUB (Brasília) e estagiário de TI na NTSEC. Meu foco é o ciclo de vida completo do dado: coletar, transformar, modelar e entregar — com automação e desenvolvimento orientado por IA (Claude Code, LLMs) como ferramentas centrais do dia a dia, não como enfeite.',
    'Na NTSEC, traduzo gargalos comerciais reais em software que roda: um coletor de oportunidades públicas via API do PNCP, robôs de scraping que atualizam o CRM sozinhos, uma aplicação em Cloudflare Workers que padroniza o registro de oportunidades e um portal em React/Supabase para a equipe comercial. Onde havia planilha e processo manual, deixo pipeline e interface.',
    'Fora do trabalho, sigo construindo: dashboard de dados públicos no ar, projetos acadêmicos de Data Warehouse e Machine Learning, e ferramentas open-source no GitHub. Gosto de problemas onde dado, automação e IA se encontram — e prezo por honestidade técnica: sei o que já domino e o que ainda estou estudando.',
  ],
  spec: [
    { k: 'Formação', v: 'Bacharelado em Ciência de Dados · UniCEUB' },
    { k: 'Período', v: 'fev/2025 – jun/2028' },
    { k: 'Atuação', v: 'Estagiário de TI · NTSEC' },
    { k: 'Local', v: 'Brasília, DF · Brasil' },
    { k: 'Núcleo', v: 'Dados · Automação · IA aplicada' },
    { k: 'Idiomas', v: 'Português (nativo) · Inglês técnico' },
  ],
}

export const experience = [
  {
    org: 'NTSEC',
    role: 'Estagiário de TI',
    period: 'mar/2026 – atual · Brasília, DF',
    summary:
      'Construo as ferramentas internas de automação, coleta e inteligência comercial da equipe — do coletor de dados públicos ao portal da equipe, passando por RPA e aplicações em produção.',
    bullets: [
      'Desenvolvi o Mapper, aplicação web em Cloudflare Workers que padroniza e agiliza o preenchimento de Registro de Oportunidade (RO), integrando o CRM Bitrix24 ao fluxo de deal registration multifabricante (F5, Check Point, Netskope, Pure Storage, Trend Micro).',
      'Criei o RADAR B2G (Python, v8.1), coletor de oportunidades públicas via API do PNCP, com checkpointing, exportação para Excel e hardening de segurança.',
      'Automatizei o fluxo comercial com o sistema JJK (Python + Playwright), que faz scraping e atualiza o CRM, eliminando etapas manuais repetitivas.',
      'Construí o NT Opportunity Portal (React, TypeScript, Vite, Supabase/PostgreSQL) para gestão e visualização das oportunidades comerciais da equipe.',
      'Desenvolvi um gerador de prompts (HTML/JS, v1–v7) para pesquisa estruturada de licitações com Claude, ChatGPT e Gemini, com regras de validação, cascata de fontes e perfis por linha de produto.',
      'Aplico metodologia MEDDPICC e inteligência de mercado (PNCP/ComprasNet) em contas como DETRAN-DF e BRB.',
    ],
  },
]

export const timeline = [
  { ts: 'fev/2025', title: 'Início do Bacharelado em Ciência de Dados', org: 'UniCEUB · Brasília', kind: 'edu' },
  { ts: '2025', title: 'Projetos acadêmicos: Data Warehouse, Coffee Shop Sales (ML), Power BI/Fabric', org: 'UniCEUB', kind: 'proj' },
  { ts: 'mar/2026', title: 'Início como Estagiário de TI', org: 'NTSEC · Brasília', kind: 'work' },
  { ts: '2026', title: 'Mapper, RADAR B2G, JJK e NT Opportunity Portal em produção', org: 'NTSEC', kind: 'proj' },
  { ts: 'jun/2028', title: 'Conclusão prevista da graduação', org: 'UniCEUB', kind: 'edu' },
]

/* status: producao | deploy | open | academico */
export const projects = [
  {
    title: 'Mapper',
    tag: 'Cloudflare Workers',
    category: 'profissional',
    status: 'producao',
    description:
      'Aplicação web que padroniza e acelera o preenchimento de Registro de Oportunidade (RO), conectando o CRM Bitrix24 ao fluxo de deal registration multifabricante. Tira o atrito de um processo comercial crítico e o deixa rápido e consistente.',
    stack: ['Cloudflare Workers', 'JavaScript', 'Bitrix24 API'],
    highlights: [
      'Integra o Bitrix24 ao deal registration de F5, Check Point, Netskope, Pure Storage e Trend Micro',
      'Roda em produção como ferramenta interna da equipe NTSEC',
      'Padroniza um fluxo antes manual e propenso a erro',
    ],
  },
  {
    title: 'RADAR B2G',
    tag: 'Python · v8.1',
    category: 'profissional',
    status: 'producao',
    description:
      'Coletor de oportunidades públicas que consome a API do PNCP, com checkpointing para retomar coletas, exportação para Excel e camada de hardening de segurança. É o nó de coleta do pipeline comercial.',
    stack: ['Python', 'PNCP API', 'Excel'],
    highlights: [
      'Checkpointing para coletas longas e retomáveis',
      'Exportação direta para Excel para uso da equipe',
      'Hardening de segurança aplicado ao coletor',
    ],
  },
  {
    title: 'Sistema JJK',
    tag: 'Python · Playwright',
    category: 'profissional',
    status: 'producao',
    description:
      'Automação de scraping e atualização de CRM que elimina etapas manuais do fluxo comercial. O nó de transformação do pipeline: pega dado bruto da web e o entrega organizado no sistema certo.',
    stack: ['Python', 'Playwright', 'RPA'],
    highlights: [
      'Scraping automatizado de dados comerciais',
      'Atualização de CRM sem intervenção manual',
      'Remove etapas repetitivas do dia a dia da equipe',
    ],
  },
  {
    title: 'NT Opportunity Portal',
    tag: 'React · Supabase',
    category: 'profissional',
    status: 'producao',
    description:
      'Portal de gestão e visualização das oportunidades comerciais da equipe, sobre uma base moderna full-stack. É a camada de entrega: onde os dados coletados e tratados viram visão de negócio.',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase/PostgreSQL'],
    highlights: [
      'Gestão e visualização centralizada das oportunidades',
      'Stack full-stack moderna (React + Supabase/PostgreSQL)',
      'Interface dedicada para a equipe comercial',
    ],
  },
  {
    title: 'Gerador de Prompts para Licitações',
    tag: 'HTML/JS · v1–v7',
    category: 'profissional',
    status: 'producao',
    description:
      'Ferramenta de pesquisa estruturada de licitações públicas com Claude, ChatGPT e Gemini. Codifica regras de validação, cascata de fontes e perfis por linha de produto para extrair inteligência de mercado de forma consistente.',
    stack: ['HTML', 'JavaScript', 'Claude/GPT/Gemini'],
    highlights: [
      'Regras de validação e cascata de fontes embutidas',
      'Perfis configuráveis por linha de produto',
      'Sete iterações de refinamento (v1 a v7)',
    ],
  },
  {
    title: 'Dashboard Cartões Gov',
    tag: 'Streamlit · ao vivo',
    category: 'pessoal',
    status: 'deploy',
    description:
      'Dashboard interativo de gastos com cartões corporativos do Governo Federal, a partir de dados públicos. Deployado online e acessível a qualquer pessoa — transparência de dados em formato navegável.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    highlights: [
      'Deployado ao vivo na Streamlit Cloud',
      'Análise interativa de gastos públicos federais',
      'Pipeline completo: dado público → visualização',
    ],
    links: [
      { label: 'Ver ao vivo', url: 'https://dashboard-cartoesgov-a69fyt3udebrewhsyskt8p.streamlit.app/', primary: true },
      { label: 'Repositório', url: 'https://github.com/HenriMafra/dashboard-cartoes.gov' },
    ],
  },
  {
    title: 'CuidaMed',
    tag: 'Python · CLI + Web',
    category: 'pessoal',
    status: 'open',
    description:
      'Gerenciador de horários de medicamentos (CLI + web) pensado para idosos e cuidadores. Integra dados de medicamentos via OpenFDA e roda com CI automatizado — software de ponta a ponta, com cuidado real de produto.',
    stack: ['Python', 'Streamlit', 'Supabase/PostgreSQL', 'OpenFDA', 'GitHub Actions'],
    highlights: [
      'Interface dupla: CLI e web',
      'Integração com a API pública OpenFDA',
      'CI configurado com GitHub Actions',
    ],
    links: [{ label: 'Repositório', url: 'https://github.com/HenriMafra/Cuidamed' }],
  },
  {
    title: 'Futebol Brasileiro — EDA',
    tag: 'Streamlit · Pandas',
    category: 'pessoal',
    status: 'open',
    description:
      'Dashboard de análise exploratória sobre dados do Campeonato Brasileiro (Kaggle). Transforma um dataset bruto em leitura visual de padrões e tendências do futebol nacional.',
    stack: ['Streamlit', 'Pandas', 'Seaborn'],
    highlights: [
      'Análise exploratória interativa do Brasileirão',
      'Dados reais do Kaggle',
      'Visualizações com Seaborn e Pandas',
    ],
    links: [{ label: 'Repositório', url: 'https://github.com/HenriMafra/Brazilian-Soccer-Database' }],
  },
  {
    title: 'Data Warehouse & Modelagem Dimensional',
    tag: 'PostgreSQL · ETL',
    category: 'acadêmico',
    status: 'academico',
    description:
      'Projeto de ETL e esquema estrela em PostgreSQL/pgAdmin4. A base do meu pensamento de modelagem: organizar dados para análise, não só para armazenamento.',
    stack: ['PostgreSQL', 'pgAdmin4', 'ETL', 'Modelagem dimensional'],
    highlights: [
      'Pipeline de ETL completo',
      'Esquema estrela aplicado a dados reais',
      'Modelagem dimensional do zero',
    ],
  },
  {
    title: 'Coffee Shop Sales',
    tag: 'Machine Learning',
    category: 'acadêmico',
    status: 'academico',
    description:
      'Classificação com Machine Learning sobre dados transacionais reais de uma cafeteria, apoiada em esquema estrela. Projeto em equipe que une modelagem de dados e ML aplicado.',
    stack: ['Python', 'Machine Learning', 'Esquema estrela'],
    highlights: [
      'Classificação sobre dados transacionais reais',
      'Combina Data Warehouse e Machine Learning',
      'Desenvolvido em equipe',
    ],
  },
  {
    title: 'Microsoft Fabric / Power BI',
    tag: 'DAX · BI',
    category: 'acadêmico',
    status: 'academico',
    description:
      'Trabalho de BI avançado com DAX, segurança de dados e otimização de modelos no ecossistema Microsoft Fabric e Power BI — o lado corporativo da análise de dados.',
    stack: ['Microsoft Fabric', 'Power BI', 'DAX'],
    highlights: [
      'DAX avançado para métricas de negócio',
      'Segurança de dados: RLS e mascaramento dinâmico',
      'Otimização de modelos de dados',
    ],
  },
  {
    title: 'Mapa de Trilhas Coursera',
    tag: 'JavaScript · SPA',
    category: 'pessoal',
    status: 'open',
    description:
      'SPA com JSON embarcado que mapeia trilhas de aprendizado por função de carreira, com rastreamento de progresso e um planner de trilha mista que pondera e ranqueia entre funções.',
    stack: ['JavaScript', 'SPA', 'JSON'],
    highlights: [
      'Rastreamento de progresso por trilha',
      'Planner de trilha mista com ponderação e ranqueamento',
      'Dados embarcados em JSON, sem backend',
    ],
  },
  {
    title: 'Neon Snake',
    tag: 'HTML5 Canvas · easter egg',
    category: 'pessoal',
    status: 'deploy',
    description:
      'Minijogo arcade em HTML5 Canvas com estética neon cyberpunk (ciano, roxo e rosa sobre fundo escuro) — a mesma paleta que costura a identidade deste portfólio. Está no ar: pressione P ou clique para jogar.',
    stack: ['HTML5 Canvas', 'JavaScript'],
    highlights: [
      'Jogo arcade completo rodando no navegador',
      'Estética neon que inspira a paleta do site',
      'Hospedado ao vivo como easter egg do portfólio',
    ],
    links: [{ label: 'Jogar agora', url: '/game/', primary: true }],
  },
]

export const skills = [
  { group: 'Linguagens', items: ['Python', 'SQL', 'JavaScript', 'TypeScript'] },
  { group: 'Dados & BI', items: ['Modelagem dimensional', 'ETL', 'Data Warehouse', 'Power BI', 'Microsoft Fabric', 'DAX', 'Pandas'] },
  { group: 'IA & LLMs', items: ['Dev. orientado por IA (Claude Code)', 'APIs Anthropic', 'APIs OpenAI', 'Ollama (LLMs locais)', 'Engenharia de prompt'] },
  { group: 'Web & Cloud', items: ['React', 'Vite', 'Node.js', 'Cloudflare Workers/Pages', 'Supabase/PostgreSQL', 'Streamlit'] },
  { group: 'RPA & Automação', items: ['Playwright', 'Scraping', 'Integração de CRM', 'Git', 'GitHub Actions (CI)'] },
]

export const roadmap = {
  group: 'Em desenvolvimento / Roadmap',
  items: ['Arquiteturas de agentes', 'RAG', 'Bancos vetoriais (pgvector, Qdrant)', 'Observabilidade de IA (Langfuse/LangSmith)'],
}

export const links = [
  { label: 'GitHub', handle: 'HenriMafra', url: 'https://github.com/HenriMafra', icon: 'github' },
  { label: 'LinkedIn', handle: 'in/henrimafra', url: 'https://www.linkedin.com/in/henrimafra', icon: 'linkedin' },
  { label: 'Hugging Face', handle: 'HENRI10', url: 'https://huggingface.co/HENRI10', icon: 'hf' },
  { label: 'Kaggle', handle: 'henrimafra', url: 'https://www.kaggle.com/henrimafra', icon: 'kaggle' },
  { label: 'LeetCode', handle: 'Henri1', url: 'https://leetcode.com/u/Henri1/', icon: 'leetcode' },
  { label: 'HackerRank', handle: 'henri_afly', url: 'https://www.hackerrank.com/profile/henri_afly', icon: 'hackerrank' },
]

export const contact = {
  heading: 'Vamos conversar sobre dados e IA.',
  subheading:
    'Estou aberto a oportunidades em Ciência de Dados, Machine Learning e automação. Se você procura alguém que entende o ciclo de vida do dado de ponta a ponta — e que constrói o que projeta — me chame por e-mail, LinkedIn ou WhatsApp.',
}

export const footerText =
  'Construído com React 19 · Vite · Tailwind 4 · deploy via GitHub Actions. Pressione P para jogar Neon Snake.'

export const nav = [
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
]
