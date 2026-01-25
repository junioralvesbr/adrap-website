import About from '@/components/About'
import GetInvolved from '@/components/Get-Involved'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <About />
        <GetInvolved />
      </main>
    </>
  )
}
