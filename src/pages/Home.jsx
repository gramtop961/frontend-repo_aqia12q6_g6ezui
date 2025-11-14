import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Culture from '../components/Culture'
import Contact from '../components/Contact'
import SiteFrame from '../components/SiteFrame'

export default function Home() {
  return (
    <SiteFrame>
      <Hero />
      <Services />
      <Portfolio />
      <Culture />
      <Contact />
    </SiteFrame>
  )
}
