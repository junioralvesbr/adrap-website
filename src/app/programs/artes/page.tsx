import { ProgramsPageTemplate } from '@/components/ProgramsPageTemplate'

const artModules = [
  {
    title: 'Pintura',
    description:
      'Explore o mundo das cores e técnicas de pintura em tela, desenvolvendo a criatividade e expressão artística através de diferentes estilos.',
    image: '/images/programas/pintura.jpg',
    features: [
      'Técnicas de pintura em tela',
      'Teoria das cores e composição',
      'Diferentes estilos artísticos',
      'Criação de obras autorais',
    ],
  },
  {
    title: 'Desenho Cartoon',
    description:
      'Aprenda a criar e desenhar personagens de desenho cartoon, desenvolvendo habilidades de expressão, criatividade e contação de histórias.',
    image: '/images/programas/fantoche.jpg',
    features: [
      'Desenho de personagens',
      'Técnicas de desenho',
      'Criação de histórias e roteiros',
      'Apresentações teatrais',
    ],
  },
  {
    title: 'Artesanato',
    description:
      'Desenvolva habilidades manuais criando peças únicas com diversos materiais, estimulando a criatividade e coordenação motora.',
    image: '/images/programas/artesanato.jpg',
    features: [
      'Trabalho com diversos materiais',
      'Reciclagem criativa',
      'Técnicas de colagem e montagem',
      'Criação de objetos decorativos',
    ],
  },
]

const artBenefits = [
  'Desenvolvimento da criatividade e imaginação',
  'Melhora da coordenação motora fina',
  'Expressão de emoções através da arte',
  'Estímulo à concentração e paciência',
  'Consciência ambiental através da reciclagem',
  'Desenvolvimento do senso estético',
  'Autoconhecimento e autoexpressão',
  'Valorização do trabalho manual e artesanal',
]

export default function ArtesPage() {
  return (
    <ProgramsPageTemplate
      title='Aulas de Artes'
      subtitle='Programa de Artes Visuais'
      description='Desenvolva a criatividade e expressão artística através da pintura, teatro de fantoches e artesanato. Um espaço onde a imaginação não tem limites.'
      heroImage='/images/programas/pintura.jpg'
      accentColor='#dc2626'
      modules={artModules}
      schedule={{
        days: 'Segunda a Sabado',
        duration: 'Turmas de 1h30',
        location: 'Sede ADRAP',
      }}
      benefits={artBenefits}
    />
  )
}
