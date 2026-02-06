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
  SOBRE: '/#sobre',
  PROGRAMAS: '/#programas',
  IMPACTO: '/#impacto',
  VOLUNTARIOS: '/#voluntarios',
  PARCEIROS: '/#parceiros',
  EVENTOS: '/#eventos',
  CONTATO: '/#contato',
} as const

// URLs de redes sociais
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://www.facebook.com/profile.php?id=100068680246673',
  INSTAGRAM: 'https://www.instagram.com/adrap.ong/',
  YOUTUBE: 'https://www.youtube.com/@AssociacaoADRAP',
} as const

// URLs de contato
export const CONTACT_LINKS = {
  MAPS: 'https://maps.app.goo.gl/7PK3oDJ3tPHGCe2a7',
  PHONE: '+5544998939526',
  EMAIL: 'associacaoadrap@gmail.com',
  WHATSAPP: 'https://wa.me/5544998939526',
} as const

// URLs de páginas legais
export const LEGAL_LINKS = {
  PRIVACY_POLICY: '#',
  TERMS_OF_USE: '#',
} as const

// URLs de programas
export const PROGRAM_LINKS = {
  MUSICA: '/programs/musica',
  AULAS_ARTE: '/programs/artes',
  APOIO_EDUCACIONAL: '/programs/apoio-educacional',
  ATENDIMENTO: '/programs/atendimento',
} as const
