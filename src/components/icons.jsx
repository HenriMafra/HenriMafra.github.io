/* Ícones SVG inline — sem dependências externas. */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconTerminal(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M4 5h16v14H4z" /><path d="m7 9 3 3-3 3M13 15h4" /></svg>)
}
export function IconDownload(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" /></svg>)
}
export function IconArrowRight(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>)
}
export function IconExternal(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M14 5h5v5M19 5l-8 8M18 14v5H5V6h5" /></svg>)
}
export function IconSun(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>)
}
export function IconMoon(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>)
}
export function IconMenu(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>)
}
export function IconClose(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>)
}
export function IconMail(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 7 8.5-7" /></svg>)
}
export function IconCopy(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h8" /></svg>)
}
export function IconCheck(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="m5 12 5 5 9-11" /></svg>)
}
export function IconPlay(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M7 5v14l11-7z" /></svg>)
}
export function IconBrain(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3M9 4a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3M15 4a3 3 0 0 0-3 3" /></svg>)
}
export function IconShuffle(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>)
}
export function IconRocket(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2 0-3s-2.2-.8-3 0Z" /><path d="M9 13c4-7 8-9 12-9 0 4-2 8-9 12l-3-3Z" /><circle cx="14.5" cy="9.5" r="1.5" /></svg>)
}
export function IconDatabase(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg>)
}

export function IconGithub(p) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.55 2.34 1.1 2.91.84.09-.65.35-1.1.63-1.35-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.76 1.04a9.4 9.4 0 0 1 5.02 0c1.92-1.31 2.76-1.04 2.76-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.9-2.35 4.76-4.58 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>)
}
export function IconLinkedin(p) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 8.5h3.86V21H3V8.5ZM9.4 8.5h3.7v1.7h.05c.52-.94 1.79-1.93 3.68-1.93 3.94 0 4.67 2.5 4.67 5.76V21h-3.86v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9.4V8.5Z" /></svg>)
}
export function IconWhatsapp(p) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.74 1.53 5.27L2 22l4.97-1.6a9.8 9.8 0 0 0 5.07 1.39h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.43 13.94c-.24.66-1.42 1.29-1.94 1.32-.5.05-.96.23-3.23-.67-2.73-1.08-4.42-3.84-4.55-4.02-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.92.92-2.18.24-.27.52-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.55.81 1.92.88 2.06.07.13.12.29.02.47-.09.18-.14.29-.27.45-.13.16-.28.36-.4.48-.13.13-.27.28-.12.54.15.27.66 1.09 1.42 1.76.98.87 1.8 1.14 2.06 1.27.27.13.42.11.58-.07.16-.18.66-.78.84-1.04.18-.27.36-.22.6-.13.25.09 1.57.74 1.84.87.27.13.45.2.51.31.07.11.07.62-.17 1.28Z" /></svg>)
}
export function IconHuggingFace(p) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 3a8 8 0 0 0-8 8c0 1.1.22 2.14.62 3.09a1.6 1.6 0 0 0-.62 1.26 1.62 1.62 0 0 0 1.05 1.51A1.6 1.6 0 0 0 6.6 19.7c.33 0 .64-.1.9-.27A7.97 7.97 0 0 0 12 20.9a7.97 7.97 0 0 0 4.5-1.47c.26.17.57.27.9.27a1.6 1.6 0 0 0 1.55-1.57 1.62 1.62 0 0 0-.05-2.77A7.96 7.96 0 0 0 20 11a8 8 0 0 0-8-8Zm-3 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-6.7 4.2c.18-.16.45-.14.6.03.78.85 1.84 1.27 3.1 1.27s2.32-.42 3.1-1.27a.43.43 0 0 1 .6-.03c.18.16.2.43.04.6-.95 1.04-2.25 1.57-3.74 1.57s-2.79-.53-3.74-1.57a.43.43 0 0 1 .04-.6Z" /></svg>)
}
export function IconKaggle(p) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M9.4 3v12.1l5.18-5.2c.1-.1.23-.13.36-.07l1.86.78c.18.08.22.3.07.43L11.9 16l5.5 4.62c.15.13.1.36-.08.43l-1.92.7a.3.3 0 0 1-.33-.08L9.4 16.3V21a.3.3 0 0 1-.3.3H7.3A.3.3 0 0 1 7 21V3a.3.3 0 0 1 .3-.3h1.8a.3.3 0 0 1 .3.3Z" /></svg>)
}
export function IconLeetcode(p) {
  return (<svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M14.5 4 7 11.5a2 2 0 0 0 0 2.8L11 18M16 7l-2-2.5M9.5 13.5h7" /></svg>)
}
export function IconHackerrank(p) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 1.5 21 6.7v10.6L12 22.5 3 17.3V6.7L12 1.5Zm-2.4 6.1c-.2 0-.3.1-.3.3v2.2H8.1V8.1c0-.2-.3-.3-.4-.1-.9.8-1.5 2-1.5 3.9s.6 3.1 1.5 3.9c.1.2.4 0 .4-.1v-2.5h1.2v2.5c0 .2.1.3.3.3h.7c.2 0 .3-.1.3-.3V7.9c0-.2-.1-.3-.3-.3h-.7Zm6.6 8.7c.9-.8 1.5-2 1.5-3.9s-.6-3.1-1.5-3.9c-.1-.2-.4 0-.4.1v2.5h-1.2V8.4c0-.2-.1-.3-.3-.3h-.7c-.2 0-.3.1-.3.3v8.2c0 .2.1.3.3.3h.7c.2 0 .3-.1.3-.3v-2.2h1.2v2.5c0 .2.3.3.4.1Z" /></svg>)
}

export const iconMap = {
  github: IconGithub,
  linkedin: IconLinkedin,
  hf: IconHuggingFace,
  kaggle: IconKaggle,
  leetcode: IconLeetcode,
  hackerrank: IconHackerrank,
  download: IconDownload,
  shuffle: IconShuffle,
  brain: IconBrain,
  rocket: IconRocket,
}
