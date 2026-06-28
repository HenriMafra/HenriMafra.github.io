/* Configuração pública do Supabase.
   A chave "anon" é PÚBLICA por design — ela só permite o que as políticas RLS
   liberam. Aqui: apenas INSERT na tabela mvp_briefs (ninguém lê os pedidos com
   esta chave). A service_role NUNCA deve aparecer no front-end. */
export const SUPABASE_URL = 'https://peptudyppsqqottfvibf.supabase.co'
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcHR1ZHlwcHNxcW90dGZ2aWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNDM3NDEsImV4cCI6MjA5MjcxOTc0MX0.8BbEneYZcMmcNJ0pmeWLq_e-9qAixIQ5qZMPzjAtzZI'

/* Insere um pedido de MVP. Retorna true se gravou. Falha em silêncio
   (o cliente ainda recebe os caminhos de WhatsApp/e-mail). */
export async function submitBrief({ name, contact, summary, payload }) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/mvp_briefs`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        name: (name || '').slice(0, 120),
        contact: (contact || '').slice(0, 200),
        summary: (summary || '').slice(0, 11000),
        payload,
        user_agent: navigator.userAgent.slice(0, 300),
      }),
    })
    return res.ok
  } catch {
    return false
  }
}
