/**
 * Configuração centralizada de URLs do site ADRAP
 *
 * Este arquivo contém todas as URLs utilizadas no site.
 * Ao alterar uma URL aqui, ela será atualizada em todos os locais onde é utilizada.
 */

// URLs de navegação interna (âncoras)
export const NAVIGATION_LINKS = {
  HOME: '/',
  INICIO: '#inicio',
  SOBRE: '#sobre',
  PROGRAMAS: '#programas',
  IMPACTO: '#impacto',
  VOLUNTARIOS: '#voluntarios',
  EVENTOS: '#eventos',
  CONTATO: '#contato',
  DOAR: '#doar',
  CAMPANHAS: '#campanhas',
} as const

// URLs de redes sociais
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com',
  INSTAGRAM: 'https://instagram.com',
  YOUTUBE: 'https://youtube.com',
} as const

// URLs de contato
export const CONTACT_LINKS = {
  MAPS: 'https://maps.app.goo.gl/drCtFvGacTBqs2iD8',
  PHONE: 'tel:+5544999999999',
  EMAIL: 'mailto:contato@adrap.ong.br',
} as const

// URLs de páginas legais
export const LEGAL_LINKS = {
  PRIVACY_POLICY: '#',
  TERMS_OF_USE: '#',
} as const

// URLs de programas (placeholder - ajuste conforme necessário)
export const PROGRAM_LINKS = {
  MUSICA: '#',
  PINTURA: '#',
  DANCA: '#',
  APOIO_EDUCACIONAL: '#',
} as const
