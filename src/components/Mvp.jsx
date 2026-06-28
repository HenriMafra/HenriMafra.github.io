import { useMemo, useState } from 'react'
import { Section, SectionHeading } from './Section'
import { whatsappLink, profile } from '../siteData'
import { submitBrief } from '../config'
import { PIX, pixCode } from '../pix'
import { IconWhatsapp, IconCheck, IconArrowRight, IconCopy, IconMail } from './icons'

const emailLink = (brief) =>
  `mailto:${profile.email}?subject=${encodeURIComponent('Pedido de MVP — henrimafra.github.io')}&body=${encodeURIComponent(brief)}`

/* ------------------------------------------------------------------
   Wizard de pedido de MVP (prévia). Linguagem simples, para leigos.
   Campos majoritariamente de marcar/escolher (reduz prompt injection);
   só nome, contato e "observações" são texto livre.
------------------------------------------------------------------ */

const TIPOS = [
  'Landing page (página única)',
  'Site institucional (várias páginas)',
  'Página de vendas',
  'Portfólio pessoal',
  'Catálogo de produtos/serviços',
  'Página de evento',
  'Link na bio / cartão digital',
  'Ainda não sei (me ajude a decidir)',
]
const OBJETIVOS = [
  'Gerar contatos/leads', 'Vender um produto', 'Vender um serviço', 'Agendar atendimentos',
  'Divulgar a marca', 'Captar inscrições', 'Mostrar meu trabalho', 'Aumentar seguidores',
]
const VIBES = [
  'Minimalista', 'Moderno/tech', 'Elegante/luxuoso', 'Divertido/colorido',
  'Sério/corporativo', 'Acolhedor/humano', 'Ousado/criativo', 'Clean/claro',
]
const PALETAS = [
  { n: 'Escuro neon', c: ['#0a0e14', '#22d3ee', '#a855f7'] },
  { n: 'Claro minimalista', c: ['#ffffff', '#111827', '#2563eb'] },
  { n: 'Terroso/natural', c: ['#f5f0e8', '#3f5e4e', '#c08457'] },
  { n: 'Vinho/sofisticado', c: ['#1a0d12', '#7b1e3b', '#d4af6a'] },
  { n: 'Pastel suave', c: ['#fdf6f9', '#f7a8c4', '#7cc4d6'] },
  { n: 'Preto e dourado', c: ['#0c0c0c', '#caa451', '#f5f5f5'] },
  { n: 'A definir com você', c: ['#94a3b8', '#64748b', '#334155'] },
]
const SECOES = [
  'Topo de impacto (hero)', 'Sobre / quem somos', 'Serviços / produtos', 'Diferenciais',
  'Galeria de fotos', 'Depoimentos de clientes', 'Tabela de preços', 'Perguntas frequentes (FAQ)',
  'Equipe', 'Mapa / localização', 'Blog / novidades', 'Formulário de contato',
]
const INTEGRACOES = [
  'Botão de WhatsApp', 'Formulário de contato', 'Instagram', 'Google Maps',
  'Agendamento online', 'Pagamento via Pix', 'Newsletter (e-mail)', 'Chat ao vivo',
]
const CONTEUDO = [
  'Já tenho os textos', 'Já tenho as fotos', 'Tenho a logo', 'Preciso que você crie os textos',
  'Preciso de imagens (posso usar IA)', 'Preciso de uma logo',
]
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
              active
                ? 'border-primary bg-primary/15 text-primary'
                : 'border-line bg-bg/40 text-muted hover:border-lineh hover:text-ink'
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

function Field({ label, hint, children }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-ink">{label}</label>
      {hint && <p className="mb-3 mt-0.5 text-xs text-muted">{hint}</p>}
      {!hint && <div className="mb-3" />}
      {children}
    </div>
  )
}

const STEPS = ['O que você quer', 'Seu negócio', 'Visual', 'Conteúdo', 'Detalhes & enviar']

export default function Mvp() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [copied, setCopied] = useState(false)
  const [pixCopied, setPixCopied] = useState(false)
  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCode())
      setPixCopied(true)
      setTimeout(() => setPixCopied(false), 1800)
    } catch { /* ignore */ }
  }
  const [d, setD] = useState({
    tipo: '', objetivos: [], negocio: '', segmento: '', publico: '',
    vibes: [], paleta: '', tema: '', secoes: [], integracoes: [], conteudo: [],
    referencias: '', prazo: '', orcamento: '', obs: '', nome: '', contato: '',
  })

  const set = (k, v) => setD((s) => ({ ...s, [k]: v }))
  const toggle = (k, v) => setD((s) => ({ ...s, [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v] }))

  const brief = useMemo(() => {
    const L = []
    L.push('PEDIDO DE MVP / PRÉVIA — via henrimafra.github.io')
    L.push('')
    if (d.nome) L.push(`Nome: ${d.nome}`)
    if (d.contato) L.push(`Contato: ${d.contato}`)
    L.push('')
    L.push(`Tipo: ${d.tipo || '—'}`)
    L.push(`Objetivos: ${d.objetivos.join(', ') || '—'}`)
    L.push(`Negócio: ${d.negocio || '—'}`)
    L.push(`Segmento: ${d.segmento || '—'}`)
    L.push(`Público-alvo: ${d.publico || '—'}`)
    L.push(`Estilo/vibe: ${d.vibes.join(', ') || '—'}`)
    L.push(`Paleta: ${d.paleta || '—'} | Tema: ${d.tema || '—'}`)
    L.push(`Seções: ${d.secoes.join(', ') || '—'}`)
    L.push(`Integrações: ${d.integracoes.join(', ') || '—'}`)
    L.push(`Conteúdo: ${d.conteudo.join(', ') || '—'}`)
    L.push(`Referências: ${d.referencias || '—'}`)
    L.push(`Prazo: ${d.prazo || '—'} | Investimento: ${d.orcamento || '—'}`)
    if (d.obs) L.push(`Observações: ${d.obs}`)
    L.push('')
    L.push('(Vou anexar logo/imagens aqui na conversa, se tiver.)')
    return L.join('\n')
  }, [d])

  const [saved, setSaved] = useState(false)
  const send = async () => {
    setDone(true)
    try { navigator.clipboard.writeText(brief) } catch { /* ignore */ }
    const ok = await submitBrief({
      name: d.nome,
      contact: d.contato,
      summary: brief,
      payload: d,
    })
    setSaved(ok)
    window.open(whatsappLink(brief), '_blank', 'noopener')
  }
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch { /* ignore */ }
  }

  const last = STEPS.length - 1

  return (
    <Section id="mvp">
      <SectionHeading
        index="06"
        id="peça-uma-prévia"
        title="Peça uma prévia do seu projeto"
        subtitle="Quer ver como o seu site ficaria antes de fechar? Responda o quanto quiser abaixo — quanto mais você contar, mais perfeita fica a prévia (MVP). Sem termos técnicos, só o que você imagina."
      />

      <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
        {/* progresso */}
        <div className="flex flex-wrap gap-1.5 border-b border-line px-5 py-4 sm:px-7">
          {STEPS.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => !done && setStep(i)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] transition ${
                i === step && !done
                  ? 'bg-primary/15 text-primary'
                  : i < step || done
                    ? 'text-accent2'
                    : 'text-muted hover:text-ink'
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
                {saved
                  ? 'Seu pedido foi registrado com segurança e o WhatsApp abriu com tudo preenchido.'
                  : 'Seu resumo foi copiado e o WhatsApp abriu com tudo preenchido.'}{' '}
                É só enviar (e anexar sua logo/imagens, se tiver). Eu volto rapidinho com a prévia e o valor.
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

              {/* Pagamento Pix da prévia */}
              <div className="mx-auto mt-8 max-w-md rounded-xl border border-primary/30 bg-primary/[0.04] p-5 text-left">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-base font-bold text-ink">Liberar a prévia</span>
                  <span className="font-mono text-lg font-bold text-primary">{PIX.amountLabel}</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  Pague via Pix para eu montar a sua prévia. Esse valor é <span className="text-accent2">abatido do projeto final</span> se você fechar — ou seja, você não perde nada.
                </p>
                <div className="mt-4 flex items-stretch gap-2">
                  <code className="flex-1 truncate rounded-md border border-line bg-bg/50 px-3 py-2.5 font-mono text-[11px] text-muted">
                    {pixCode()}
                  </code>
                  <button
                    type="button"
                    onClick={copyPix}
                    className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-md bg-primary px-3.5 py-2.5 text-xs font-semibold text-[#04121a] transition hover:brightness-110"
                  >
                    {pixCopied ? <IconCheck className="h-4 w-4" /> : <IconCopy className="h-4 w-4" />}
                    {pixCopied ? 'Copiado!' : 'Copiar Pix'}
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
                </div>
              )}

              {step === 1 && (
                <div>
                  <Field label="Nome do seu negócio ou projeto">
                    <input value={d.negocio} onChange={(e) => set('negocio', e.target.value)} placeholder="Ex.: Café da Esquina" className="w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary" />
                  </Field>
                  <Field label="Do que se trata?" hint="Em poucas palavras, o que você faz/vende.">
                    <input value={d.segmento} onChange={(e) => set('segmento', e.target.value)} placeholder="Ex.: cafeteria artesanal no centro" className="w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary" />
                  </Field>
                  <Field label="Quem você quer atrair?" hint="Seu cliente ideal (opcional).">
                    <input value={d.publico} onChange={(e) => set('publico', e.target.value)} placeholder="Ex.: jovens que trabalham por perto" className="w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary" />
                  </Field>
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
                          <span className="flex">
                            {p.c.map((c) => <span key={c} className="h-4 w-4 rounded-full border border-black/20" style={{ background: c, marginLeft: '-4px' }} />)}
                          </span>
                          {p.n}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Prefere claro ou escuro?">
                    <Chips options={['Claro', 'Escuro', 'Tanto faz / você decide']} value={d.tema} onToggle={(v) => set('tema', v)} single />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div>
                  <Field label="Quais partes o site deve ter?" hint="Marque tudo que fizer sentido — eu organizo a ordem.">
                    <Chips options={SECOES} value={d.secoes} onToggle={(v) => toggle('secoes', v)} />
                  </Field>
                  <Field label="O que você quer que funcione no site?" hint="Recursos e integrações.">
                    <Chips options={INTEGRACOES} value={d.integracoes} onToggle={(v) => toggle('integracoes', v)} />
                  </Field>
                  <Field label="Sobre o conteúdo (textos, fotos, logo)">
                    <Chips options={CONTEUDO} value={d.conteudo} onToggle={(v) => toggle('conteudo', v)} />
                  </Field>
                </div>
              )}

              {step === 4 && (
                <div>
                  <Field label="Sites/marcas que você admira" hint="Opcional. Cole links ou cite nomes — ajuda a acertar o estilo.">
                    <input value={d.referencias} onChange={(e) => set('referencias', e.target.value)} placeholder="Ex.: apple.com, aquele site da concorrência..." className="w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary" />
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Prazo"><Chips options={PRAZOS} value={d.prazo} onToggle={(v) => set('prazo', v)} single /></Field>
                    <Field label="Investimento"><Chips options={ORCAMENTOS} value={d.orcamento} onToggle={(v) => set('orcamento', v)} single /></Field>
                  </div>
                  <Field label="Quer acrescentar algo?" hint="Opcional. Conte qualquer detalhe que ajude a deixar perfeito.">
                    <textarea value={d.obs} onChange={(e) => set('obs', e.target.value)} rows={3} placeholder="Escreva à vontade..." className="w-full resize-y rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary" />
                  </Field>
                  <div className="grid gap-x-5 sm:grid-cols-2">
                    <Field label="Seu nome"><input value={d.nome} onChange={(e) => set('nome', e.target.value)} placeholder="Como te chamo?" className="w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary" /></Field>
                    <Field label="WhatsApp ou e-mail"><input value={d.contato} onChange={(e) => set('contato', e.target.value)} placeholder="Para eu te enviar a prévia" className="w-full rounded-md border border-line bg-bg/40 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-primary" /></Field>
                  </div>
                  <p className="rounded-lg border border-line bg-bg/40 px-4 py-3 text-xs leading-relaxed text-muted">
                    💡 A prévia (MVP) é uma demonstração de como o seu projeto ficaria, por um valor simbólico pago via <span className="text-ink">Pix</span> — combinamos tudo no contato, sem compromisso de fechar.
                  </p>
                </div>
              )}

              {/* navegação */}
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
