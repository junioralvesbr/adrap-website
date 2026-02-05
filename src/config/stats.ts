import { HandHelping, Heart, Home, Users } from 'lucide-react'

export const stats = [
  { icon: HandHelping, value: 30, suffix: '+', label: 'Campanhas realizadas' },
  { icon: Users, value: 120, suffix: '+', label: 'Crianças atendidas' },
  { icon: Heart, value: 40, suffix: '+', label: 'Voluntários mobilizados' },
  { icon: Home, value: 60, suffix: '+', label: 'Famílias impactadas' },
] as const
