import { useEffect, useMemo, useRef, useState } from 'react'
import { Section } from './Section'
import { whatsappLink, profile } from '../siteData'
import { submitBrief } from '../config'
import { PIX, pixCode } from '../pix'
import { IconWhatsapp, IconCheck, IconArrowRight, IconCopy, IconMail } from './icons'

const emailLink = (brief) =>
  `mailto:${profile.email}?subject=${encodeURIComponent('Pedido de MVP — henrimafra.github.io')}&body=${encodeURIComponent(brief)}`

/* ------------------------------------------------------------------
   Wizard de pedido de MVP. Linguagem simples, para leigos.
   Campos majoritariamente de marcar / busca-autocomplete (reduz prompt
   injection); só nome, contato e "observações" são texto livre.
------------------------------------------------------------------ */

const TIPOS = [
  'Landing page (página única)', 'Site institucional (várias páginas)', 'Página de vendas',
  'Portfólio pessoal', 'Catálogo de produtos/serviços', 'Página de evento',
  'Link na bio / cartão digital', 'Página de captura (lista de e-mails)', 'Ainda não sei (me ajude a decidir)',
]
const OBJETIVOS = [
  'Gerar contatos/leads', 'Vender um produto', 'Vender um serviço', 'Agendar atendimentos',
  'Divulgar a marca', 'Captar inscrições', 'Mostrar meu trabalho', 'Aumentar seguidores', 'Receber currículos',
]
const PAGINAS = ['Só 1 página', '2 a 4 páginas', '5 ou mais', 'Não sei ainda']
const DOMINIO = ['Já tenho domínio', 'Quero registrar um', 'Pode ser um link grátis', 'Não sei o que é']
const NICHOS = [
  'Restaurante / Lanchonete', 'Cafeteria', 'Padaria / Confeitaria', 'Pizzaria', 'Food truck',
  'Salão de beleza', 'Barbearia', 'Estética / Spa', 'Manicure / Nail designer', 'Maquiagem',
  'Academia / Crossfit', 'Personal trainer', 'Estúdio de pilates / yoga', 'Nutricionista', 'Fisioterapeuta',
  'Médico / Clínica', 'Dentista', 'Psicólogo / Terapeuta', 'Veterinário / Pet shop',
  'Advogado / Escritório de advocacia', 'Contador / Contabilidade', 'Corretor de imóveis', 'Imobiliária',
  'Arquiteto', 'Designer de interiores', 'Engenheiro', 'Construtora / Reformas', 'Marcenaria',
  'Loja de roupas', 'Loja de calçados', 'Joalheria / Semijoias', 'Ótica', 'Loja de cosméticos',
  'E-commerce / Loja virtual', 'Artesanato', 'Floricultura', 'Vinícola / Adega', 'Distribuidora de bebidas',
  'Fotógrafo', 'Videomaker', 'Produtora de eventos', 'Buffet / Festas', 'DJ / Banda / Músico',
  'Escola / Curso', 'Professor particular', 'Curso online / Infoproduto', 'Coach / Mentor',
  'Agência de marketing', 'Designer / Freelancer', 'Desenvolvedor / TI', 'Consultoria',
  'Mecânica / Auto center', 'Lava-rápido', 'Funilaria', 'Loja de autopeças',
  'Imobiliária rural / Agronegócio', 'Turismo / Agência de viagens', 'Pousada / Hotel', 'Airbnb / Aluguel por temporada',
  'ONG / Igreja / Projeto social', 'Político / Candidato', 'Influenciador / Criador de conteúdo', 'Outro',
]
const PUBLICOS = [
  'Público geral', 'Jovens (18-30)', 'Adultos (30-50)', 'Famílias', 'Empresas (B2B)',
  'Alto padrão / Luxo', 'Econômico / Popular', 'Local / Da minha cidade', 'Todo o Brasil', 'Internacional',
]
const REDES = ['Instagram', 'Facebook', 'TikTok', 'WhatsApp', 'YouTube', 'LinkedIn', 'Não tenho ainda']
const VIBES = [
  'Minimalista', 'Moderno/tech', 'Elegante/luxuoso', 'Divertido/colorido',
  'Sério/corporativo', 'Acolhedor/humano', 'Ousado/criativo', 'Clean/claro', 'Retrô/vintage', 'Natural/orgânico',
]
const PALETAS = [
  { n: 'Escuro neon', c: ['#0a0e14', '#22d3ee', '#a855f7'] },
  { n: 'Claro minimalista', c: ['#ffffff', '#111827', '#2563eb'] },
  { n: 'Terroso/natural', c: ['#f5f0e8', '#3f5e4e', '#c08457'] },
  { n: 'Vinho/sofisticado', c: ['#1a0d12', '#7b1e3b', '#d4af6a'] },
  { n: 'Pastel suave', c: ['#fdf6f9', '#f7a8c4', '#7cc4d6'] },
  { n: 'Preto e dourado', c: ['#0c0c0c', '#caa451', '#f5f5f5'] },
  { n: 'Vibrante/colorido', c: ['#ff5d8f', '#7df9ff', '#ffd166'] },
  { n: 'A definir com você', c: ['#94a3b8', '#64748b', '#334155'] },
]
const TOM = ['Formal e profissional', 'Descontraído e próximo', 'Inspirador/motivacional', 'Direto ao ponto', 'Divertido/bem-humorado', 'Sofisticado/exclusivo']
const SECOES = [
  'Topo de impacto (hero)', 'Sobre / quem somos', 'Serviços / produtos', 'Diferenciais',
  'Galeria de fotos', 'Depoimentos de clientes', 'Tabela de preços', 'Perguntas frequentes (FAQ)',
  'Equipe', 'Mapa / localização', 'Blog / novidades', 'Antes e depois', 'Formulário de contato', 'Rodapé com redes',
]
const CTA = ['Chamar no WhatsApp', 'Comprar agora', 'Agendar / Reservar', 'Pedir orçamento', 'Ligar', 'Preencher formulário', 'Seguir nas redes', 'Baixar algo']
const INTEGRACOES = [
  'Botão de WhatsApp', 'Formulário de contato', 'Instagram embutido', 'Google Maps',
  'Agendamento online', 'Pagamento via Pix', 'Newsletter (e-mail)', 'Chat ao vivo', 'Google Analytics', 'Pixel do Facebook',
]
const CONTEUDO = [
  'Já tenho os textos', 'Já tenho as fotos', 'Tenho a logo', 'Preciso que você crie os textos',
  'Preciso de imagens (pode usar IA)', 'Preciso de uma logo', 'Tenho vídeos', 'Não tenho quase nada ainda',
]
const IDIOMA = ['Português', 'Português + Inglês', 'Inglês', 'Espanhol', 'Outro']
const PRAZOS = ['Sem pressa', 'Nas próximas semanas', 'O quanto antes', 'É urgente']
const ORCAMENTOS = ['Quero entender os valores', 'Enxuto', 'Intermediário', 'Tô tranquilo com o investimento']

function Chips({ options, value, onToggle, single }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = single ? value === opt : value.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            data-magnetic
            onClick={() => onToggle(opt)}
            aria-pressed={active}
            className={`rounded-full border px-3.5 py-2 text-sm transition ${
              active ? 'border-primary bg-primary/15 text-primary' : 'border-line bg-bg/40 text-muted hover:border-lineh hover:text-ink'
            }`}
          >
            {active && <IconCheck className="mr-1.5 inline h-3.5 w-3.5" />}
            {opt}
          </button>
        )
      })}
    </div>
  )
}

/* Campo de busca-autocomplete: digita para filtrar e escolhe uma opção. */
function SearchSelect({ options, value, onChange, placeholder }) {
  const [q, setQ] = useState(value || '')
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])
  const filtered = options.filter((o) => o.toLowerCase().includes(q.toLowerCase())).slice(0, 8)
  return (
    <div ref={ref} className="relative">
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); onChange(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary"
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-md border border-lineh bg-surface2 py-1 shadow-2xl shadow-black/40">
          {filtered.map((o) => (
            <li key={o}>
              <button
                type="button"
                onMouseDown={() => { setQ(o); onChange(o); setOpen(false) }}
                className="block w-full px-3.5 py-2 text-left text-sm text-ink hover:bg-primary/10 hover:text-primary"
              >
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Field({ label, hint, children }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-ink">{label}</label>
      {hint ? <p className="mb-3 mt-0.5 text-xs text-muted">{hint}</p> : <div className="mb-3" />}
      {children}
    </div>
  )
}

const inputCls = 'w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary'
const STEPS = ['O que você quer', 'Seu negócio', 'Visual & tom', 'Estrutura', 'Referências', 'Enviar']

export default function Mvp() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const [pixCopied, setPixCopied] = useState(false)
  const [d, setD] = useState({
    tipo: '', objetivos: [], paginas: '', dominio: '',
    negocio: '', segmento: '', publico: [], regiao: '', redes: [],
    vibes: [], paleta: '', tema: '', tom: '', fontes: '',
    secoes: [], cta: '', integracoes: [], conteudo: [], idioma: '',
    referencias: '', concorrentes: '', evitar: '', prazo: '', orcamento: '',
    obs: '', nome: '', contato: '',
  })

  const set = (k, v) => setD((s) => ({ ...s, [k]: v }))
  const toggle = (k, v) => setD((s) => ({ ...s, [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v] }))

  const brief = useMemo(() => {
    const row = (k, v) => `${k}: ${Array.isArray(v) ? (v.join(', ') || '—') : (v || '—')}`
    return [
      'PEDIDO DE MVP / PRÉVIA — via henrimafra.github.io', '',
      d.nome && `Nome: ${d.nome}`, d.contato && `Contato: ${d.contato}`, '',
      row('Tipo', d.tipo), row('Objetivos', d.objetivos), row('Nº de páginas', d.paginas), row('Domínio', d.dominio),
      row('Negócio', d.negocio), row('Segmento/nicho', d.segmento), row('Público', d.publico), row('Região', d.regiao), row('Redes', d.redes),
      row('Estilo/vibe', d.vibes), row('Paleta', d.paleta), row('Tema', d.tema), row('Tom de voz', d.tom), row('Fontes/estilo', d.fontes),
      row('Seções', d.secoes), row('Ação principal (CTA)', d.cta), row('Integrações', d.integracoes), row('Conteúdo', d.conteudo), row('Idioma', d.idioma),
      row('Referências', d.referencias), row('Concorrentes', d.concorrentes), row('Evitar', d.evitar), row('Prazo', d.prazo), row('Investimento', d.orcamento),
      d.obs && `Observações: ${d.obs}`, '',
      '(Vou anexar logo/imagens aqui na conversa, se tiver.)',
    ].filter((x) => x !== undefined && x !== false).join('\n')
  }, [d])

  const send = async () => {
    setDone(true)
    try { navigator.clipboard.writeText(brief) } catch { /* ignore */ }
    const ok = await submitBrief({ name: d.nome, contact: d.contato, summary: brief, payload: d })
    setSaved(ok)
    window.open(whatsappLink(brief), '_blank', 'noopener')
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(brief); setCopied(true); setTimeout(() => setCopied(false), 1600) } catch { /* ignore */ }
  }
  const copyPix = async () => {
    try { await navigator.clipboard.writeText(pixCode()); setPixCopied(true); setTimeout(() => setPixCopied(false), 1800) } catch { /* ignore */ }
  }

  const last = STEPS.length - 1

  return (
    <Section id="mvp">
      <div className="aurora" aria-hidden="true" />

      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            <span className="status-dot" aria-hidden="true" /> 06 — experimente · leva 1 minuto
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink md:text-[2.6rem]">
            Veja seu site <span className="text-primary">pronto</span> antes de investir
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Monte aqui um pedido de prévia em 1 minuto. Quanto mais você contar, mais perfeito fica —
            sem termos técnicos, quase tudo é só marcar ou buscar.
          </p>
        </div>

        {/* O que é um MVP */}
        <div className="mx-auto mt-7 max-w-2xl rounded-xl border border-primary/20 bg-primary/[0.04] p-5 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-primary">o que é um “MVP”?</div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            <strong className="text-ink">MVP</strong> vem do inglês{' '}
            <em className="text-ink">Minimum Viable Product</em> — em português,{' '}
            <strong className="text-ink">Produto Mínimo Viável</strong>. Sem o “tecniquês”: é uma{' '}
            <strong className="text-ink">primeira versão enxuta</strong> do seu site, feita rápido e por um
            valor simbólico, só para você <strong className="text-ink">ver como ficaria de verdade</strong>{' '}
            antes de fechar o projeto completo.
          </p>
        </div>

        {/* Benefícios */}
        <div className="mx-auto mt-4 grid max-w-2xl gap-3 sm:grid-cols-3">
          {[
            { e: '👀', t: 'Veja antes de investir', d: 'Você aprova com os próprios olhos.' },
            { e: '⚡', t: 'Pronto rapidinho', d: 'Uma prévia real em pouco tempo.' },
            { e: '💸', t: 'Valor abatido', d: 'Abate no projeto se você fechar.' },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border border-line bg-bg/40 p-4 text-center">
              <div className="text-2xl">{b.e}</div>
              <div className="mt-1.5 text-sm font-semibold text-ink">{b.t}</div>
              <div className="mt-0.5 text-xs leading-snug text-muted">{b.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-surface/60 shadow-2xl shadow-primary/5">
        <div className="flex flex-wrap gap-1.5 border-b border-line px-5 py-4 sm:px-7">
          {STEPS.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => !done && setStep(i)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] transition ${
                i === step && !done ? 'bg-primary/15 text-primary' : i < step || done ? 'text-accent2' : 'text-muted hover:text-ink'
              }`}
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] ${
                i < step || done ? 'border-accent2 bg-accent2/15' : i === step ? 'border-primary' : 'border-line'
              }`}>
                {i < step || done ? <IconCheck className="h-3 w-3" /> : i + 1}
              </span>
              <span className="hidden sm:inline">{s}</span>
            </button>
          ))}
        </div>

        <div className="p-5 sm:p-7">
          {done ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent2/15 text-accent2">
                <IconCheck className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-ink">Pedido recebido! 🎉</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                {saved ? 'Seu pedido foi registrado com segurança e o WhatsApp abriu com tudo preenchido.' : 'Seu resumo foi copiado e o WhatsApp abriu com tudo preenchido.'}{' '}
                É só enviar (e anexar sua logo/imagens, se tiver).
              </p>
              {saved && (
                <p className="mx-auto mt-2 inline-flex items-center gap-1.5 rounded-full border border-accent2/40 bg-accent2/10 px-3 py-1 font-mono text-[11px] text-accent2">
                  <IconCheck className="h-3.5 w-3.5" /> registrado com segurança
                </p>
              )}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={whatsappLink(brief)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-[#04121a] transition hover:brightness-110">
                  <IconWhatsapp className="h-[18px] w-[18px]" /> WhatsApp
                </a>
                <a href={emailLink(brief)} className="inline-flex items-center gap-2 rounded-md border border-lineh px-5 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary">
                  <IconMail className="h-[18px] w-[18px]" /> Enviar por e-mail
                </a>
                <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-md border border-lineh px-5 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary">
                  {copied ? <IconCheck className="h-4 w-4 text-accent2" /> : <IconCopy className="h-4 w-4" />} {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              <div className="mx-auto mt-8 max-w-md rounded-xl border border-primary/30 bg-primary/[0.04] p-5 text-left">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-base font-bold text-ink">Liberar a prévia</span>
                  <span className="font-mono text-lg font-bold text-primary">{PIX.amountLabel}</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  Pague via Pix para eu montar a sua prévia. Esse valor é <span className="text-accent2">abatido do projeto final</span> se você fechar — ou seja, você não perde nada.
                </p>
                <div className="mt-4 flex items-stretch gap-2">
                  <code className="flex-1 truncate rounded-md border border-line bg-bg/50 px-3 py-2.5 font-mono text-[11px] text-muted">{pixCode()}</code>
                  <button type="button" onClick={copyPix} className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-md bg-primary px-3.5 py-2.5 text-xs font-semibold text-[#04121a] transition hover:brightness-110">
                    {pixCopied ? <IconCheck className="h-4 w-4" /> : <IconCopy className="h-4 w-4" />} {pixCopied ? 'Copiado!' : 'Copiar Pix'}
                  </button>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-muted">
                  No app do seu banco: <span className="text-ink">Pix → Pix Copia e Cola</span>, cole o código e confirme. Depois é só me mandar o comprovante no WhatsApp.
                </p>
              </div>
            </div>
          ) : (
            <>
              {step === 0 && (
                <div>
                  <Field label="O que você precisa?" hint="Não sabe ao certo? Sem problema — escolha a opção que mais chega perto.">
                    <Chips options={TIPOS} value={d.tipo} onToggle={(v) => set('tipo', v)} single />
                  </Field>
                  <Field label="Qual o principal objetivo?" hint="Pode marcar mais de um.">
                    <Chips options={OBJETIVOS} value={d.objetivos} onToggle={(v) => toggle('objetivos', v)} />
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Quantas páginas?"><Chips options={PAGINAS} value={d.paginas} onToggle={(v) => set('paginas', v)} single /></Field>
                    <Field label="Você tem um domínio (www)?"><Chips options={DOMINIO} value={d.dominio} onToggle={(v) => set('dominio', v)} single /></Field>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <Field label="Nome do seu negócio ou projeto">
                    <input value={d.negocio} onChange={(e) => set('negocio', e.target.value)} placeholder="Ex.: Café da Esquina" className={inputCls} />
                  </Field>
                  <Field label="Qual o seu segmento?" hint="Comece a digitar e escolha na lista (ou escreva o seu).">
                    <SearchSelect options={NICHOS} value={d.segmento} onChange={(v) => set('segmento', v)} placeholder="Ex.: cafeteria, advogado, loja de roupas..." />
                  </Field>
                  <Field label="Quem você quer atrair?" hint="Pode marcar mais de um.">
                    <Chips options={PUBLICOS} value={d.publico} onToggle={(v) => toggle('publico', v)} />
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Região de atuação" hint="Opcional.">
                      <input value={d.regiao} onChange={(e) => set('regiao', e.target.value)} placeholder="Ex.: Brasília e região" className={inputCls} />
                    </Field>
                    <Field label="Redes sociais que você usa"><Chips options={REDES} value={d.redes} onToggle={(v) => toggle('redes', v)} /></Field>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <Field label="Qual clima/estilo combina com você?" hint="Pode marcar vários.">
                    <Chips options={VIBES} value={d.vibes} onToggle={(v) => toggle('vibes', v)} />
                  </Field>
                  <Field label="Tem uma paleta de cores em mente?">
                    <div className="flex flex-wrap gap-2.5">
                      {PALETAS.map((p) => (
                        <button key={p.n} type="button" data-magnetic onClick={() => set('paleta', p.n)} aria-pressed={d.paleta === p.n}
                          className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-xs transition ${d.paleta === p.n ? 'border-primary bg-primary/10 text-ink' : 'border-line bg-bg/40 text-muted hover:border-lineh'}`}>
                          <span className="flex">{p.c.map((c) => <span key={c} className="h-4 w-4 rounded-full border border-black/20" style={{ background: c, marginLeft: '-4px' }} />)}</span>
                          {p.n}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Prefere claro ou escuro?"><Chips options={['Claro', 'Escuro', 'Tanto faz / você decide']} value={d.tema} onToggle={(v) => set('tema', v)} single /></Field>
                    <Field label="Tom de voz da marca"><Chips options={TOM} value={d.tom} onToggle={(v) => set('tom', v)} single /></Field>
                  </div>
                  <Field label="Estilo de letra preferido" hint="Opcional.">
                    <Chips options={['Moderna/sem serifa', 'Clássica/com serifa', 'Manuscrita/elegante', 'Tecnológica', 'Você decide']} value={d.fontes} onToggle={(v) => set('fontes', v)} single />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div>
                  <Field label="Quais partes o site deve ter?" hint="Marque tudo que fizer sentido — eu organizo a ordem.">
                    <Chips options={SECOES} value={d.secoes} onToggle={(v) => toggle('secoes', v)} />
                  </Field>
                  <Field label="Qual a ação principal que o visitante deve fazer?">
                    <Chips options={CTA} value={d.cta} onToggle={(v) => set('cta', v)} single />
                  </Field>
                  <Field label="O que você quer que funcione no site?" hint="Recursos e integrações.">
                    <Chips options={INTEGRACOES} value={d.integracoes} onToggle={(v) => toggle('integracoes', v)} />
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Sobre o conteúdo (textos, fotos, logo)"><Chips options={CONTEUDO} value={d.conteudo} onToggle={(v) => toggle('conteudo', v)} /></Field>
                    <Field label="Idioma do site"><Chips options={IDIOMA} value={d.idioma} onToggle={(v) => set('idioma', v)} single /></Field>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <Field label="Sites/marcas que você admira" hint="Opcional. Cole links ou cite nomes — ajuda a acertar o estilo.">
                    <input value={d.referencias} onChange={(e) => set('referencias', e.target.value)} placeholder="Ex.: apple.com, aquele site bonito que você viu..." className={inputCls} />
                  </Field>
                  <Field label="Concorrentes (pra eu me inspirar ou superar)" hint="Opcional.">
                    <input value={d.concorrentes} onChange={(e) => set('concorrentes', e.target.value)} placeholder="Ex.: nome ou site de quem você concorre" className={inputCls} />
                  </Field>
                  <Field label="Tem algo que você NÃO quer no site?" hint="Opcional.">
                    <Chips options={['Sem estoque de imagens genéricas', 'Sem muito texto', 'Sem cores berrantes', 'Sem pop-ups', 'Sem nada disso (tô tranquilo)']} value={d.evitar} onToggle={(v) => set('evitar', v)} single />
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Prazo"><Chips options={PRAZOS} value={d.prazo} onToggle={(v) => set('prazo', v)} single /></Field>
                    <Field label="Investimento"><Chips options={ORCAMENTOS} value={d.orcamento} onToggle={(v) => set('orcamento', v)} single /></Field>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <Field label="Quer acrescentar algo?" hint="Opcional. Conte qualquer detalhe que ajude a deixar perfeito.">
                    <textarea value={d.obs} onChange={(e) => set('obs', e.target.value)} rows={3} placeholder="Escreva à vontade..." className={`${inputCls} resize-y`} />
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Seu nome"><input value={d.nome} onChange={(e) => set('nome', e.target.value)} placeholder="Como te chamo?" className={inputCls} /></Field>
                    <Field label="WhatsApp ou e-mail"><input value={d.contato} onChange={(e) => set('contato', e.target.value)} placeholder="Para eu te enviar a prévia" className={inputCls} /></Field>
                  </div>
                  <p className="rounded-lg border border-line bg-bg/40 px-4 py-3 text-xs leading-relaxed text-muted">
                    💡 A prévia (MVP) é uma demonstração de como o seu projeto ficaria, por um valor simbólico pago via <span className="text-ink">Pix ({PIX.amountLabel})</span> e <span className="text-ink">abatido do projeto final</span> se você fechar. Sem compromisso.
                  </p>
                </div>
              )}

              <div className="mt-7 flex items-center justify-between gap-3">
                <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}
                  className="rounded-md px-4 py-2.5 text-sm font-semibold text-muted transition enabled:hover:text-ink disabled:opacity-0">
                  ← Voltar
                </button>
                {step < last ? (
                  <button type="button" data-magnetic onClick={() => setStep((s) => Math.min(last, s + 1))}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-[#04121a] transition hover:brightness-110">
                    Próximo <IconArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button type="button" data-magnetic onClick={send}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-[#04121a] transition hover:brightness-110">
                    <IconWhatsapp className="h-[18px] w-[18px]" /> Enviar pedido
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  )
}
