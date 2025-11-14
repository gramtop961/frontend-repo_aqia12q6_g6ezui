import SiteFrame from '../components/SiteFrame'
import ContactSection from '../components/Contact'

export default function Contact() {
  return (
    <SiteFrame>
      <section className="pt-28" id="contact-page">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">Tell us about your product. We’ll get back within 24 hours.</p>
          <div className="mt-10">
            <ContactSection />
          </div>
        </div>
      </section>
    </SiteFrame>
  )
}
