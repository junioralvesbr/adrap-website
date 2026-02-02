import About from '@/components/About'
import GetInvolved from '@/components/Get-Involved'
import Header from '@/components/Header'
import LeiRouanet from '@/components/Lei-Rouanet'
import Mission from '@/components/Mission'
import NavBar from '@/components/NavBar'
import Programs from '@/components/Programs'
import SocialImpact from '@/components/Social-Impact'
import Volunteers from '@/components/Volunteers'

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>

      <main>
        <About />
        <GetInvolved />
        <Mission />
        <Programs />
        <SocialImpact />
        <Volunteers />
        <LeiRouanet />
      </main>
    </>
  )
}
