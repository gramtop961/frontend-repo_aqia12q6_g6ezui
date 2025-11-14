import SiteFrame from '../components/SiteFrame'
import Portfolio from '../components/Portfolio'

export default function Work() {
  return (
    <SiteFrame>
      <section className="pt-28" id="work">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Selected Work</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">A snapshot of projects across SaaS, fintech, and consumer. Case studies available upon request.</p>
          <div className="mt-10">
            <Portfolio />
          </div>
        </div>
      </section>
    </SiteFrame>
  )
}
