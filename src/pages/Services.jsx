import SiteFrame from '../components/SiteFrame'
import ServicesSection from '../components/Services'

export default function Services() {
  return (
    <SiteFrame>
      <section className="pt-28" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Services</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">End-to-end capabilities from research to production. We plug into your team and ship fast.</p>
          <div className="mt-10">
            <ServicesSection />
          </div>
        </div>
      </section>
    </SiteFrame>
  )
}
