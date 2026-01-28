import { ProgramsPageTemplate } from '@/components/ProgramsPageTemplate'

const musicModules = [
  {
    title: 'Violão',
    description:
      'Aprenda a tocar violão do básico ao intermediário, desenvolvendo técnicas de dedilhado, acordes e ritmos brasileiros.',
    image: '/images/programas/violao.jpg',
    features: [
      'Postura e técnica correta',
      'Acordes básicos e intermediários',
      'Ritmos brasileiros e internacionais',
      'Leitura de cifras e tablaturas',
    ],
  },
  {
    title: 'Teclado',
    description:
      'Desenvolva habilidades no teclado com aulas práticas que incluem teoria musical, leitura de partituras e improvisação.',
    image: '/images/programas/teclado.jpg',
    features: [
      'Posição das mãos e dedilhado',
      'Notas e escalas musicais',
      'Leitura de partituras básica',
      'Músicas populares e clássicas',
    ],
  },
  {
    title: 'Bateria',
    description:
      'Sinta o ritmo e aprenda bateria com foco em coordenação motora, diferentes estilos musicais e técnicas de percussão.',
    image: '/images/programas/bateria.jpg',
    features: [
      'Coordenação motora',
      'Ritmos básicos e viradas',
      'Diferentes estilos musicais',
      'Técnicas de baqueta',
    ],
  },
  {
    title: 'Coral',
    description:
      'Participe do nosso coral e desenvolva sua voz, aprendendo técnicas vocais, respiração e interpretação em grupo.',
    image: '/images/programas/coral.jpg',
    features: [
      'Técnicas de respiração',
      'Afinação e projeção vocal',
      'Harmonia em grupo',
      'Apresentações em eventos',
    ],
  },
]

const musicBenefits = [
  'Desenvolvimento da coordenação motora e concentração',
  'Estímulo à criatividade e expressão artística',
  'Melhora da autoestima e confiança',
  'Trabalho em equipe através de apresentações em grupo',
  'Disciplina e responsabilidade com horários e práticas',
  'Oportunidade de participar de eventos culturais',
  'Socialização com outras crianças e jovens',
  'Desenvolvimento cognitivo através da música',
]

export default function MusicaPage() {
  return (
    <ProgramsPageTemplate
      title='Aulas de Música'
      subtitle='Programa Musical'
      description='Desperte o talento musical das crianças através do aprendizado de instrumentos e canto. Nossas aulas desenvolvem habilidades técnicas, criatividade e trabalho em equipe.'
      heroImage='/images/programas/aula-musica.jpg'
      accentColor='#2563eb'
      modules={musicModules}
      schedule={{
        days: 'Segunda a Sexta',
        time: '14h às 17h',
        duration: 'Turmas de 1h',
        location: 'Sede ADRAP',
      }}
      benefits={musicBenefits}
    />
  )
}
