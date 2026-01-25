import About from '@/components/About'
import Atividades from '@/components/Atividades'
import GetInvolved from '@/components/Get-Involved'
import Header from '@/components/Header'
import Mission from '@/components/Mission'
import SocialImpact from '@/components/Social-Impact'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <About />
        <GetInvolved />
        <Mission />
        <Atividades />
        <SocialImpact />
      </main>
    </>
  )
}
