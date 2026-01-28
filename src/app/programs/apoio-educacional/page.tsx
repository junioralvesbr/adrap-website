import { ProgramsPageTemplate } from '@/components/ProgramsPageTemplate'

const danceModules = [
  {
    title: 'Breaking Foundation',
    description:
      'Aprenda os fundamentos do breaking, incluindo toprock, footwork e freezes básicos. A base para se tornar um verdadeiro b-boy ou b-girl.',
    image: '/images/programas/breakdance-class.jpg',
    features: [
      'Toprock e movimentos em pé',
      'Footwork e movimentos de chão',
      'Freezes básicos e intermediários',
      'Musicalidade e ritmo',
    ],
  },
  {
    title: 'Power Moves',
    description:
      'Evolua para movimentos mais avançados como windmill, headspin e outros power moves que impressionam em qualquer batalha.',
    image: '/images/programas/breakdance-group.jpg',
    features: [
      'Condicionamento físico',
      'Técnicas de rotação',
      'Movimentos acrobáticos',
      'Segurança e prevenção de lesões',
    ],
  },
  {
    title: 'Batalhas e Cyphers',
    description:
      'Aprenda a se expressar em batalhas e rodas de breaking, desenvolvendo seu estilo único e criatividade na improvisação.',
    image: '/images/programas/education.png',
    features: [
      'Improvisação e freestyle',
      'Desenvolvimento de estilo pessoal',
      'Etiqueta de batalha',
      'Participação em eventos',
    ],
  },
]

const danceBenefits = [
  'Excelente condicionamento físico e resistência',
  'Desenvolvimento da coordenação e equilíbrio',
  'Expressão corporal e criatividade',
  'Disciplina e persistência nos treinos',
  'Cultura hip hop e respeito às origens',
  'Socialização e trabalho em equipe (crews)',
  'Autoconfiança e superação de limites',
  'Oportunidade de participar de eventos e batalhas',
]

export default function ApoioEducacionalPage() {
  return (
    <ProgramsPageTemplate
      title='Apoi Educacional'
      subtitle='Programa de Apoio Educacional'
      description='Entre para o mundo do breaking e desenvolva força, criatividade e estilo. Uma arte que nasceu nas ruas e conquista palcos ao redor do mundo.'
      heroImage='/images/programas/breakdance-class.jpg'
      accentColor='#9333ea'
      modules={danceModules}
      schedule={{
        days: 'Quarta e Sábado',
        time: '15h às 18h',
        duration: 'Turmas de 1h30',
        location: 'Sede ADRAP',
      }}
      benefits={danceBenefits}
    />
  )
}
