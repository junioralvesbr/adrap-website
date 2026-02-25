import { ProgramsPageTemplate } from '@/components/ProgramsPageTemplate'

const Modules = [
  {
    title: 'Dança Break',
    description:
      'Aprenda os fundamentos do breaking, incluindo toprock, footwork e freezes básicos. Desenvolva sua criatividade e expressões corporais.',
    image: '/images/programas/breakdance-class.jpg',
    features: [
      'Toprock e movimentos em pé',
      'Footwork e movimentos de chão',
      'Freezes básicos e intermediários',
      'Musicalidade e ritmo',
      'Condicionamento físico',
    ],
  },
  {
    title: 'Aulas de Inglês',
    description:
      'Aulas de inglês para o desenvolvimento de nossas crianças no ambito pessoal e profissional.',
    image: '/images/programas/aulas-ingles.jpg',
    features: [
      'Conversação e vocabulário prático',
      'Desenvolvimento de leitura e escrita',
      'Apoio pedagógico',
      'Apoio psicossocial',
    ],
  },
]

const danceBenefits = [
  'Excelente condicionamento físico e resistência',
  'Desenvolvimento da coordenação e equilíbrio',
  'Expressão corporal e criatividade',
  'Disciplina e persistência nos treinos',
  'Autoconfiança e superação de limites',
  'Socialização e trabalho em equipe',
  'Desenvolvimento de um novo idioma',
  'Desenvolvimento de habilidades de leitura e escrita',
  'Desenvolvimento de comunicação',
]

export default function ApoioEducacionalPage() {
  return (
    <ProgramsPageTemplate
      title='Apoio Educacional'
      subtitle='Programa de Apoio Educacional'
      description='Um programa completo que integra a expressão corporal da dança break, o ensino da língua inglesa e o apoio pedagógico, preparando jovens para os desafios do futuro com criatividade e conhecimento.'
      heroImage='/images/programas/educacao.jpg'
      accentColor='#9333ea'
      modules={Modules}
      schedule={{
        days: 'Quarta, Quinta e Sábado',
        duration: 'Turmas de 1h',
        location: 'Sede ADRAP',
      }}
      benefits={danceBenefits}
    />
  )
}
