import About from '@/components/About'
import GetInvolved from '@/components/Get-Involved'
import Header from '@/components/Header'
import LeiRouanet from '@/components/Lei-Rouanet'
import Mission from '@/components/Mission'
import Partners from '@/components/partners'
import Programs from '@/components/Programs'
import SocialImpact from '@/components/Social-Impact'
import Volunteers from '@/components/Volunters'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADRAP - Associação das Ruas ao Palácio',
  description: 'ADRAP - Associação das Ruas ao Palácio',
}

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
        <Programs />
        <SocialImpact />
        <Volunteers />
        <Partners />
        <LeiRouanet />
      </main>
    </>
  )
}
