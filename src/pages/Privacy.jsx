import SiteFrame from '../components/SiteFrame'

export default function Privacy() {
  return (
    <SiteFrame>
      <section className="pt-28" id="privacy">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">We respect your privacy. This page outlines how we collect and use data. Replace this with your actual policy before launch.</p>
          <ul className="mt-6 list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>What we collect</li>
            <li>How we use it</li>
            <li>How we store it</li>
            <li>Your rights</li>
          </ul>
        </div>
      </section>
    </SiteFrame>
  )
}
