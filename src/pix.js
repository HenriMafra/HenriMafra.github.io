/* Gerador de Pix "Copia e Cola" (BR Code / EMV estático).
   Determinístico — funciona offline, sem dependências. */

const tlv = (id, value) => id + String(value.length).padStart(2, '0') + value

function crc16(payload) {
  let crc = 0xffff
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1
      crc &= 0xffff
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0')
}

export function buildPix({ key, name, city, amount, txid = '***' }) {
  const mai = tlv('26', tlv('00', 'br.gov.bcb.pix') + tlv('01', key))
  let payload =
    tlv('00', '01') +
    mai +
    tlv('52', '0000') +
    tlv('53', '986') +
    (amount ? tlv('54', amount) : '') +
    tlv('58', 'BR') +
    tlv('59', name) +
    tlv('60', city) +
    tlv('62', tlv('05', txid)) +
    '6304'
  return payload + crc16(payload)
}

/* Configuração do Pix da prévia (MVP). */
export const PIX = {
  key: '2da0e827-2346-44c6-a24e-975f064b8f41',
  name: 'HENRI MAFRA',
  city: 'BRASILIA',
  amount: '39.90',
  amountLabel: 'R$ 39,90',
}

export const pixCode = () =>
  buildPix({ key: PIX.key, name: PIX.name, city: PIX.city, amount: PIX.amount, txid: 'PREVIAMVP' })
